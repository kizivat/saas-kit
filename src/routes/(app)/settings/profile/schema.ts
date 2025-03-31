import { z } from 'zod';

export const emailFormSchema = z.object({
	email: z
		.string({ required_error: 'Please fill in the email' })
		.email({ message: 'Invalid email' }),
});

export type EmailFormSchema = typeof emailFormSchema;

///

export const infoFormSchema = z.object({
	name: z.string().trim().nullable(),
});

export type InfoFormSchema = typeof infoFormSchema;

///

export const deleteAccountFormSchema = z.object({
	confirmation: z.string({
		required_error: 'Please fill in the confirmation',
	}),
});

export type DeleteAccountFormSchema = typeof deleteAccountFormSchema;
