import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export type FormSchema = typeof formSchema;
