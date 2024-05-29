<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import type { User } from '@supabase/supabase-js';
	import {
		superForm,
		type Infer,
		type SuperValidated,
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import TriangleAlert from '~icons/lucide/triangle-alert';
	import { emailFormSchema, type EmailFormSchema } from './schema';

	export let data: SuperValidated<Infer<EmailFormSchema>>;
	export let user: User | null;

	const form = superForm(data, {
		validators: zodClient(emailFormSchema),
		resetForm: false,
	});

	const { form: formData, enhance, submitting, tainted, message } = form;
</script>

<Card.Root>
	<form method="POST" action="?/updateEmail" use:enhance>
		<Card.Header>
			<Card.Title>Email</Card.Title>
			<Card.Description>
				Change the email address associated with your account. You'll need an
				access to both the old and new email addresses to complete the process.
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input
						{...attrs}
						type="email"
						placeholder="name@example.com"
						required
						bind:value={$formData.email}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			{#if !$message?.success && user?.new_email}
				<Alert.Root variant="warning">
					<TriangleAlert class="h-4 w-4" />
					<Alert.Title>Email change pending</Alert.Title>
					<Alert.Description class="flex flex-col gap-3 pt-2">
						<dl class="grid grid-cols-[auto,1fr] gap-x-4 font-mono">
							<dt>Change to:</dt>
							<dd>{user.new_email}</dd>
							<dt>Requested at:</dt>
							<dd>{user.email_change_sent_at}</dd>
						</dl>

						<p>To complete the change, please verify both email addresses.</p>
					</Alert.Description>
				</Alert.Root>
			{/if}
		</Card.Content>
		<Card.Footer class="flex gap-2">
			<Form.Button disabled={$submitting || !$tainted}>
				{#if $submitting}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					Changing Email…
				{:else}
					Change Email
				{/if}
			</Form.Button>
			{#if $message?.success}
				<p class="max-w-prose text-xs text-green-700">{$message.success}</p>
			{:else if !$tainted}
				<span class="text-xs italic text-muted-foreground"> Unmodified </span>
			{/if}
		</Card.Footer>
	</form>
</Card.Root>
