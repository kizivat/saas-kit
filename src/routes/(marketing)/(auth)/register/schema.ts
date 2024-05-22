import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export type FormSchema = typeof formSchema;
