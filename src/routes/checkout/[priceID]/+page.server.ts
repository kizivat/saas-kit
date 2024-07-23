import { PRIVATE_STRIPE_SECRET_KEY } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	params,
	url,
	locals: { safeGetSession, supabaseServiceRole },
}) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		const search = new URLSearchParams(url.search);
		search.set('next', url.pathname);
		throw redirect(303, `/register?${search.toString()}`);
	}

	const stripe = new Stripe(PRIVATE_STRIPE_SECRET_KEY, {
		apiVersion: '2024-04-10',
	});

	const price = await stripe.prices.retrieve(params.priceID);

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
			throw error(500, 'Unknown Error: If issue persists please contact us.');
		}
	}

	const lineItems: Stripe.Checkout.SessionCreateParams['line_items'] = [
		{
			...(price.custom_unit_amount
				? {
						price_data: {
							unit_amount: url.searchParams.has('amount')
								? parseInt(url.searchParams.get('amount') || '0', 10)
								: price.custom_unit_amount.preset || 0,
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
		const stripeSession = await stripe.checkout.sessions.create({
			line_items: lineItems,
			customer,
			mode: price.type === 'recurring' ? 'subscription' : 'payment',
			success_url: `${url.origin}/dashboard`,
			cancel_url: `${url.origin}/settings/billing`,
		});
		checkoutUrl = stripeSession.url;
	} catch (e) {
		console.error(e);
		throw error(500, 'Unknown Error: If issue persists please contact us.');
	}

	throw redirect(303, checkoutUrl ?? '/pricing');
};

export const actions = {
	customPrice: async (event) => {
		const { priceID } = event.params;
		const formData = await event.request.formData();

		const amountStr = formData.get('customAmount');

		if (!amountStr) {
			throw error(400, 'Amount is required');
		}

		const amount = parseInt(amountStr.toString(), 10);

		if (isNaN(amount) || amount < 1) {
			throw error(400, 'Invalid amount');
		}

		throw redirect(303, `/checkout/${priceID}?amount=${amount * 100}`);
	},
};
