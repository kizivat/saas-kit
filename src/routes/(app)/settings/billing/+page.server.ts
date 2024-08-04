export const csr = false;

import { fetchSortedProducts } from '$lib/stripe/client-helpers';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	locals: { safeGetSession, supabaseServiceRole, stripe },
}) => {
	const { user } = await safeGetSession();
	if (!user) {
		return redirect(303, '/login');
	}

	const products = await fetchSortedProducts(stripe);

	// Get user's current product
	const { data: stripeCustomer, error } = await supabaseServiceRole
		.from('stripe_customers')
		.select('stripe_customer_id')
		.eq('user_id', user.id)
		.limit(1)
		.single();

	if (error) {
		console.error(error);
		return { products };
	}

	// const { data: userProducts, error: userProductsError } =
	// 	await supabaseServiceRole
	// 		.from('user_products')
	// 		.select('stripe_product_id, type')
	// 		.eq('user_id', user.id);

	// if (userProductsError) {
	// 	console.error(userProductsError);
	// 	return { products: sortedProducts };
	// }

	// TODO: we'll need to use that once we correctly store the user products
	// if (
	// 	userProducts.findIndex((product) => product.type === 'subscription') < 0
	// ) {
	// 	return { products: sortedProducts, userProducts };
	// }

	const { data: subscriptions } = await stripe.subscriptions.list({
		customer: stripeCustomer.stripe_customer_id,
		limit: 100,
	});

	return {
		products,
		// userProducts,
		currentSubscriptions: subscriptions,
	};
};
