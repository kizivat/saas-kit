import Stripe from 'stripe';
import { stripeProductIds } from '../../config';
import { toSortedProducts } from './product-utils';

export async function fetchSortedProducts(stripe: Stripe) {
	const { data: products } = await stripe.products.list({
		active: true,
		expand: ['data.default_price'],
		ids: stripeProductIds ?? undefined,
	});

	const pricesPromises = products.map((product) =>
		stripe.prices.list({
			active: true,
			product: product.id,
		}),
	);

	// TODO: we should handle the case where more than one page of prices is returned
	const prices = (await Promise.allSettled(pricesPromises))
		// TODO: TBD - should we care about the rejected promises?
		.filter((result) => result.status === 'fulfilled')
		.flatMap((prices) => prices.value.data);

	const sortedProducts = toSortedProducts(
		products.map((product) => ({
			...product,
			default_price: product.default_price as Stripe.Price, // just force the type as we know it's there due to `expand` above
			prices: prices.filter((price) => price.product === product.id),
		})),
	);

	return sortedProducts;
}

export async function fetchCurrentUsersSubscription(
	stripe: Stripe,
	stripeCustomerID: string,
) {
	const subscriptionsPromise = stripe.subscriptions.list({
		customer: stripeCustomerID,
		limit: 100,
	});

	const [{ data: subscriptions }] = await Promise.all([subscriptionsPromise]);

	const currentSubscriptions = subscriptions.filter((sub) =>
		['active', 'trailing', 'past_due'].includes(sub.status),
	);

	return currentSubscriptions;
}
