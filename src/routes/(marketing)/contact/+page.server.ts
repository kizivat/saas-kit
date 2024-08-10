import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
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

		// const transport = createTransport({
		// 	host: PRIVATE_SMTP_HOST,
		// 	port: Number(PRIVATE_SMTP_PORT),
		// 	secure: true,
		// 	auth: {
		// 		user: PRIVATE_SMTP_USER,
		// 		pass: PRIVATE_SMTP_PASSWORD,
		// 	},
		// });

		const insert = supabaseServiceRole.from('contact_messages').insert({
			name,
			email,
			subject,
			body,
			updated_at: new Date(),
		});

		// const send = transport.sendMail({
		// 	from: `${name} ${PRIVATE_SMTP_USER}`,
		// 	to: PRIVATE_NOTIFICATIONS_EMAIL,
		// 	subject,
		// 	text: `from: ${name} <${email}>\nsubject:${subject}\n\n${body}`,
		// });

		// let result: SMTPTransport.SentMessageInfo | null = null,
		let error: PostgrestError | null = null;

		try {
			[/*result,*/ { error }] = await Promise.all([/*send, */ insert]);
		} catch (e) {
			console.warn("Couldn't send contact request email.", e);
			if (!error) {
				console.info(
					`Contact message from ${name} <${email}> with subject "${subject}" and body "${body}" was saved to your databases \`contact_messages\` table.`,
				);
			}
		}

		if (error) {
			console.error(
				'Error inserting contact request message into the database: ',
				error,
			);
			console.error(
				`Contact message from ${name} <${email}> with subject "${subject}" and body "${body}" was not saved.`,
			);
		}

		// if (result && result.rejected.length > 0) {
		// 	console.error('Rejected email send response: ', result.response);
		// 	console.error(
		// 		`Email from ${name} <${email}> with subject ${subject} and body ${body} was rejected.`,
		// 	);
		// 	return setError(
		// 		form,
		// 		'',
		// 		'An error occured while sending the message. Please try again later.',
		// 	);
		// }

		return message(form, {
			success: 'Thank you for your message. We will get back to you soon.',
		});
	},
};
