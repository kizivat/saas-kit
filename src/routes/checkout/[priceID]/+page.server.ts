import { PRIVATE_STRIPE_SECRET_KEY } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	params,
	url,
	locals: { safeGetSession },
}) => {
	const { session, user } = await safeGetSession();
	if (!session || !user) {
		throw redirect(303, '/login');
	}

	const stripe = new Stripe(PRIVATE_STRIPE_SECRET_KEY, {
		apiVersion: '2024-04-10',
	});

	const price = await stripe.prices.retrieve(params.priceID);

	const { id: customer } = await stripe.customers.create({
		email: user.email,
	});

	const line_items: Stripe.Checkout.SessionCreateParams['line_items'] = [
		{
			...(price.custom_unit_amount
				? {
						price_data: {
							// TODO: Add support for custom unit amount
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
			line_items,
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
