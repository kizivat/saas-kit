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
							unit_amount: 1000,
							currency: price.currency,
							product: price.product as string,
						},
					}
				: { price: price.id, currency: price.currency }),
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
