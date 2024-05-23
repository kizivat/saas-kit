export const ssr = false;

import {
	PRIVATE_SMTP_HOST,
	PRIVATE_SMTP_PASSWORD,
	PRIVATE_SMTP_PORT,
	PRIVATE_SMTP_USER,
} from '$env/static/private';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { createTransport } from 'nodemailer';
import { message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';

export const load: ServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const supabaseServiceRole = event.locals.supabaseServiceRole;
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const { name, email, subject, body } = form.data;

		const transport = createTransport({
			host: PRIVATE_SMTP_HOST,
			port: Number(PRIVATE_SMTP_PORT),
			secure: true,
			auth: {
				user: PRIVATE_SMTP_USER,
				pass: PRIVATE_SMTP_PASSWORD,
			},
		});

		const insert = supabaseServiceRole.from('contact_messages').insert({
			name,
			email,
			subject,
			body,
			updated_at: new Date(),
		});

		const send = transport.sendMail({
			from: `${name} <david@kizivat.dev>`,
			to: 'david.kizivat@gmail.com',
			subject,
			text: `from: ${name} <${email}>\nsubject:${subject}\n\n${body}`,
		});

		const [result, { error }] = await Promise.all([send, insert]);

		console.debug('Contact email status: ', result);

		if (error) {
			console.error(
				'Error inserting contact request message into the database: ',
				error,
			);
			console.error(
				`Contact message from ${name} <${email}> with subject ${subject} and body ${body} was not saved.`,
			);
		}

		if (result.rejected.length > 0) {
			console.error('Rejected email send response: ', result.response);
			console.error(
				`Email from ${name} <${email}> with subject ${subject} and body ${body} was rejected.`,
			);
			return setError(
				form,
				'',
				'An error occured while sending the message. Please try again later.',
			);
		}

		return message(form, {
			success: 'Thank you for your message. We will get back to you soon.',
		});
	},
};
