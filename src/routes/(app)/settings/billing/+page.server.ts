import { PRIVATE_STRIPE_SECRET_KEY } from '$env/static/private';
import { Stripe } from 'stripe';
import { stripeProductIds } from '../../../../config';
import type { PageServerLoad } from './$types';
import { toSortedProducts } from './stripe-helpers';

export const load: PageServerLoad = async () => {
	const stripe = new Stripe(PRIVATE_STRIPE_SECRET_KEY, {
		apiVersion: '2024-04-10',
	});

	const { data: products } = await stripe.products.list({
		active: true,
		expand: ['data.default_price'],
		ids: stripeProductIds ?? undefined,
	});

	const { data: prices } = await stripe.prices.list({
		active: true,
	});

	return {
		products: toSortedProducts(
			products.map((product) => ({
				...product,
				prices: prices.filter((price) => price.product === product.id),
			})),
		),
	};
};
