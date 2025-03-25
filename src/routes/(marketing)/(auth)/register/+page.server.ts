export const ssr = false;

import { fail, redirect, type Actions } from '@sveltejs/kit';

import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types.js';
import { formSchema } from './schema';

export const load: PageServerLoad = async ({ url }) => {
	const next = url.searchParams.get('next');
	const isCheckout = Boolean(
		typeof next === 'string' &&
			decodeURIComponent(next).match(/^\/checkout\/.+$/),
	);

	return {
		isCheckout,
		form: await superValidate(zod(formSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const supabase = event.locals.supabase;
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const { email, password } = form.data;

		const {
			error,
			data: { session },
		} = await supabase.auth.signUp({
			email,
			password,
		});

		if (error) {
			console.error(error);

			// Check to see if sign-ups are disabled in Supabase
			if (
				error.code === 'signup_disabled' ||
				error.message?.includes('Signups not allowed')
			) {
				return {
					form,
					signupDisabled: true,
				};
			}

			return setError(form, '', 'Could not sign up. Please try again.');
		}

		if (session) {
			const search = new URLSearchParams(event.url.search);
			search.set('next', event.url.searchParams.get('next') || '/dashboard');

			return redirect(303, '/auth/callback?' + search.toString());
		}

		// Instead of redirecting, return success status and the email used to sign up
		return {
			form,
			success: true,
			email,
		};
	},
};
