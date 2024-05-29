import { z } from 'zod';

export const changePasswordFormSchema = z
	.object({
		old_password: z.string({
			required_error: 'Please fill in the old password',
		}),
		new_password: z
			.string({
				required_error: 'Please fill in the new password',
			})
			.min(6, 'Password must be at least 6 characters'),
		confirm_password: z
			.string({
				required_error: 'Please fill in the confirm password',
			})
			.min(6, 'Password must be at least 6 characters'),
	})
	.refine((data) => data.new_password == data.confirm_password, {
		message: "Passwords didn't match",
		path: ['confirm_password'],
	});

export type ChangePasswordFormSchema = typeof changePasswordFormSchema;

export const createPasswordFormSchema = z
	.object({
		new_password: z
			.string({
				required_error: 'Please fill in the password',
			})
			.min(6, 'Password must be at least 6 characters'),
		confirm_password: z
			.string({
				required_error: 'Please fill in the confirm password',
			})
			.min(6, 'Password must be at least 6 characters'),
	})
	.refine((data) => data.new_password == data.confirm_password, {
		message: "Passwords didn't match",
		path: ['confirm_password'],
	});

export type CreatePasswordFormSchema = typeof createPasswordFormSchema;
