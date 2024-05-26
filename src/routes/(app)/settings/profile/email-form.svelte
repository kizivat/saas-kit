<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import {
		superForm,
		type Infer,
		type SuperValidated,
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import { emailFormSchema, type EmailFormSchema } from './schema';

	export let data: SuperValidated<Infer<EmailFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(emailFormSchema),
	});

	const { form: formData, enhance, submitting } = form;
</script>

<Card.Root>
	<form method="POST" use:enhance>
		<Card.Header>
			<Card.Title>Email</Card.Title>
			<Card.Description>
				Change the email address associated with your account.
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<Form.Field {form} name="email">
				<Form.Control>
					<Form.Label>Email</Form.Label>
					<Input
						type="email"
						placeholder="name@example.com"
						required
						bind:value={$formData.email}
					/>
				</Form.Control>
			</Form.Field>
		</Card.Content>
		<Card.Footer>
			<Form.Button disabled={$submitting}>
				{#if $submitting}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					Submitting…
				{:else}
					Submit
				{/if}
			</Form.Button>
		</Card.Footer>
	</form>
</Card.Root>
