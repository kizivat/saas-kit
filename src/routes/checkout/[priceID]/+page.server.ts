import { fetchCurrentUsersSubscription } from '$lib/stripe/client-helpers';
import { error, redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	params,
	url,
	locals: { safeGetSession, supabaseServiceRole, stripe },
}) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		const search = new URLSearchParams(url.search);
		search.set('next', url.pathname);
		return redirect(303, `/register?${search.toString()}`);
	}

	const price = await stripe.prices.retrieve(params.priceID);

	const customAmount = price.custom_unit_amount
		? url.searchParams.has('customAmount')
			? parseInt(url.searchParams.get('customAmount') || '0', 10) * 100
			: price.custom_unit_amount.preset || 0
		: null;

	const amount =
		customAmount !== null && !isNaN(customAmount)
			? customAmount
			: price.unit_amount;
	if (amount === 0) {
		return redirect(303, '/dashboard');
	}

	const { data: results } = await supabaseServiceRole
		.from('stripe_customers')
		.select('stripe_customer_id')
		.eq('user_id', user.id);

	let customer: string;
	if (results && results.length > 0) {
		customer = results[0].stripe_customer_id;
	} else {
		const { id } = await stripe.customers.create({
			email: user.email,
			metadata: {
				user_id: user.id,
			},
		});

		customer = id;

		const { error: upsertError } = await supabaseServiceRole
			.from('stripe_customers')
			.upsert(
				{ user_id: user.id, stripe_customer_id: customer },
				{ onConflict: 'user_id' },
			);

		if (upsertError) {
			console.error(upsertError);
			error(500, 'Unknown Error: If issue persists please contact us.');
		}
	}

	const currentSubscriptions = await fetchCurrentUsersSubscription(
		stripe,
		customer,
	);

	// const activeProductId = currentSubscriptions.map(
	// 	(sub) => sub.items.data[0].price.product as string,
	// )[0]; // force string as we don't expand
	// const sortedProductIds = products.map((product) => product.id);

	// const comparison =
	// 	sortedProductIds.indexOf(activeProductId) -
	// 	sortedProductIds.indexOf(price.product as string);

	if (currentSubscriptions.length > 0) {
		await stripe.subscriptions.update(currentSubscriptions[0].id, {
			items: [
				{
					id: currentSubscriptions[0].items.data[0].id,
					price: price.id,
				},
			],
		});
		return redirect(303, '/settings/billing');
	}

	const lineItems: Stripe.Checkout.SessionCreateParams['line_items'] = [
		{
			...(price.custom_unit_amount
				? {
						price_data: {
							unit_amount:
								customAmount != null && !isNaN(customAmount) ? customAmount : 0,
							currency: price.currency,
							product: price.product as string,
						},
					}
				: { price: price.id }),
			quantity: 1,
		},
	];

	let checkoutUrl;
	try {
		const checkoutSession = await stripe.checkout.sessions.create({
			line_items: lineItems,
			customer,
			mode: price.type === 'recurring' ? 'subscription' : 'payment',
			success_url: `${url.origin}/dashboard`,
			cancel_url: `${url.origin}/settings/billing`,
			// recurring prices have invoice creation enabled automatically
			...(price.type === 'recurring'
				? {}
				: {
						invoice_creation: {
							enabled: true,
						},
					}),
		});
		checkoutUrl = checkoutSession.url;
	} catch (e) {
		console.error(e);
		error(500, 'Unknown Error: If issue persists please contact us.');
	}

	redirect(303, checkoutUrl ?? '/pricing');
};
