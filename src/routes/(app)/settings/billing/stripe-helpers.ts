import type Stripe from 'stripe';

export type ProductWithPrices = Stripe.Product & {
	default_price: Stripe.Price;
	prices: Stripe.Price[];
};

/**
 * Orders a list of Stripe prices by their significant value.
 * A price's significant value is determined by the following rules:
 * - If the price is a per-unit price, the significant value is the unit amount
 * - If the price is a tiered price, the significant value is the first tier's flat amount or unit amount
 * - If the price is a custom unit amount, the significant value is the preset value if it has one
 * - If the price does not fit any of the above categories, the significant value is `-Infinity`
 *
 * @param prices A list of Stripe prices
 * @returns
 */
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

/**
 * Orders a list of products by the order of their prices.
 * The order is determined by their position in the list of
 * prices when sorted by {@link toSortedPrices() `toSortedPrice()`}
 * based on the first occurence of the product in the sorted list.
 *
 * E.g. if taking three products with id `prod_1`, `prod_2`, and `prod_3`
 * and their prices are ordered as follows:
 * ```js
 * [
 *   { id: 'price_1', product: 'prod_1', unit_amount: 100 },
 *   { id: 'price_2', product: 'prod_2', unit_amount: 200 },
 *   { id: 'price_3', product: 'prod_3', unit_amount: 300 },
 *   { id: 'price_2', product: 'prod_1', unit_amount: 400 }
 * ]
 * ```
 *
 * The products will be ordered as follows: [ prod_1, prod_2, prod_3 ].
 * Eventhough `prod_2` has one os its price with a higher unit amount than `prod_3`,
 * `prod_2` will be ordered before `prod_3` because `prod_2` has the lowest of its
 * prices lower than the lowest of `prod_3`'s prices.
 *
 * @param products A list of products
 * @returns
 */
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
