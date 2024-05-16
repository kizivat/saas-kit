import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({
	locals: { supabase, safeGetSession },
}) => {
	const { session, user } = await safeGetSession();

	if (!session || !user?.id) {
		throw redirect(303, '/login');
	}

	const { data: profile, error } = await supabase
		.from('profiles')
		.select(`*`)
		.eq('id', user?.id)
		.single();

	if (error) {
		console.error('Error getting profile:', error.message);
	}

	return { session, profile };
};
