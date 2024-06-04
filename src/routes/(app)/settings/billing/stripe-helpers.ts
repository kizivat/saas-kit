import type Stripe from 'stripe';

export type ProductWithPrices = Stripe.Product & { prices: Stripe.Price[] };

export function toSortedPrices(prices: Stripe.Price[]): Stripe.Price[] {
	const result = [...prices];
	const significantValues = result.map((price) => {
		if (price.billing_scheme == 'per_unit' && price.unit_amount !== null) {
			return {
				id: price.id,
				significantValue: price.unit_amount,
			};
		} else if (
			price.billing_scheme === 'tiered' &&
			price.tiers &&
			price.tiers[0]
		) {
			return {
				id: price.id,
				significantValue:
					price.tiers[0].flat_amount ?? price.tiers[0].unit_amount ?? -Infinity,
			};
		} else if (price.custom_unit_amount?.preset) {
			return {
				id: price.id,
				significantValue: price.custom_unit_amount.preset,
			};
		} else {
			return {
				id: price.id,
				significantValue: -Infinity,
			};
		}
	});

	const sorted = result.sort(
		(a, b) =>
			(significantValues.find((v) => v.id === a.id)?.significantValue ??
				-Infinity) -
			(significantValues.find((v) => v.id === b.id)?.significantValue ??
				-Infinity),
	);

	return sorted;
}

export function toSortedProducts(
	products: ProductWithPrices[],
): ProductWithPrices[] {
	const sortedProducts = [...products];

	const sortedPrices = toSortedPrices(
		products.flatMap((product) => product.prices),
	);

	return sortedProducts.sort((a, b) => {
		return (
			sortedPrices.findIndex((price) => price.product === a.id) -
			sortedPrices.findIndex((price) => price.product === b.id)
		);
	});
}
