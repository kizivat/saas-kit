export const ssr = false;

import { fail, type Actions } from '@sveltejs/kit';
import { message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { formSchema } from './schema';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema)),
	};
};

export const actions: Actions = {
	default: async ({ url, request, locals: { supabase } }) => {
		const form = await superValidate(request, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const { email } = form.data;
		const redirectTo = url.searchParams.get('redirectTo');
		if (!redirectTo) {
			return setError(form, '', 'Invalid redirect URL.');
		}

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo,
		});

		if (error) {
			return setError(
				form,
				'',
				'An error occured while sending the reset email. Please try again later.',
			);
		}

		return message(form, {
			success: 'Sent. Check your email for reset password instructions.',
		});
	},
};
