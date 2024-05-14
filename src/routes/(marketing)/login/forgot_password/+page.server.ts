export const ssr = false;

import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const base = new URL(request.url).origin;
		const redirectTo = new URL(
			`/auth/callback?next=${encodeURIComponent('/account/settings/reset_password')}`,
			base,
		).toString();
		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo,
		});

		if (error) {
			return fail(400, { error: error.message });
		}

		return { success: true };
	},
};
