import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email(),
	name: z.string().trim(),
	subject: z.string().trim(),
	body: z.string().trim(),
});

export type FormSchema = typeof formSchema;
