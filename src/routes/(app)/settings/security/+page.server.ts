import { redirect } from '@sveltejs/kit';
import { fail, message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { changePasswordFormSchema, createPasswordFormSchema } from './schema';

export const load = async ({ locals: { supabase, safeGetSession } }) => {
	const { amr } = await safeGetSession();

	// let's not check for session here as it prevets us to show alert after sign out post-password reset
	// everything is handled in the action
	// if (!session) {
	// 	throw redirect(303, '/login');
	// }

	const recoveryAmr = amr?.find((x) => x.method === 'recovery');

	const { data: passwordSet } = await supabase.rpc('user_password_set');

	return {
		changePasswordForm: await superValidate(zod(changePasswordFormSchema)),
		createPasswordForm: await superValidate(zod(createPasswordFormSchema)),
		recoverySession: Boolean(recoveryAmr),
		createPassword: !passwordSet,
	};
};

export const actions = {
	updatePassword: async (event) => {
		const { safeGetSession, supabase } = event.locals;
		const { session, user, amr } = await safeGetSession();
		if (!session) {
			redirect(303, '/login');
		}

		const { data: passwordSet } =
			await event.locals.supabase.rpc('user_password_set');

		// Can check if we're a "password recovery" session by checking session amr
		// let currentPassword take priority if provided (user can use either form)
		const recoveryAmr = amr?.find((x) => x.method === 'recovery');

		const form =
			passwordSet && !recoveryAmr
				? await superValidate(event, zod(changePasswordFormSchema))
				: await superValidate(event, zod(createPasswordFormSchema));
		if (!form.valid) {
			return fail(400, {
				changePasswordForm: form,
			});
		}

		// if this is password recovery session, check timestamp of recovery session
		if (recoveryAmr) {
			const timeSinceLogin = Date.now() - recoveryAmr.timestamp * 1000;
			if (timeSinceLogin > 1000 * 60 * 15) {
				// 15 mins in milliseconds
				return setError(
					form,
					'',
					'Recovery code expired. Please log out, then use "Forgot Password" on the log in page to reset your password. Codes are valid for 15 minutes.',
				);
			}
		}

		const { new_password } = form.data;

		// this should really never happen
		// at this point the validation would have failed if password was set
		// and the old password was not provided but just in case we check again
		if (!recoveryAmr && passwordSet && !('old_password' in form.data)) {
			return setError(form, '', 'Old password is required');
		}

		if ('old_password' in form.data) {
			if (typeof form.data.old_password !== 'string') {
				console.error(new Error('Old password was not a string'));
				throw setError(
					form,
					'',
					'Could not update password. Please try again.',
				);
			}

			const { error } = await supabase.auth.signInWithPassword({
				email: user?.email || '',
				password: form.data.old_password,
			});
			if (error) {
				await supabase.auth.signOut();
				// The user was logged out because of bad password. Redirect to error page explaining.
				redirect(303, '/security-error');
			}
		}

		const { error } = await supabase.auth.updateUser({
			password: new_password,
		});

		if (error) {
			console.error(error);
			return setError(form, '', 'Could not update password. Please try again.');
		}

		if (recoveryAmr) {
			await supabase.auth.signOut();
			redirect(303, '/login?alertDialog=reset-password');
		}

		return 'old_password' in form.data
			? message(form, {
					success: 'Password updated',
				})
			: {
					form,
					success: 'Password set',
				};
	},
};
