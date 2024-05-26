import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { emailFormSchema } from './schema';

export const load: PageServerLoad = async () => {
	return {
		emailForm: await superValidate(zod(emailFormSchema)),
	};
};
