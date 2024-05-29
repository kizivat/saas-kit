<script lang="ts">
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
	import {
		createPasswordFormSchema,
		type CreatePasswordFormSchema,
	} from './schema';

	export let data: SuperValidated<Infer<CreatePasswordFormSchema>>;
	export let user: User | null;
	export let recoverySession: boolean = false;

	const form = superForm(data, {
		validators: zodClient(createPasswordFormSchema),
	});

	const { form: formData, enhance, submitting, tainted, message } = form;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>
			{recoverySession ? 'Reset Password' : 'Create Password'}
		</Card.Title>
		<Card.Description>Create a new password for your account.</Card.Description>
	</Card.Header>
	<form method="POST" action="?/updatePassword" use:enhance>
		<input
			type="text"
			name="email"
			autocomplete="username"
			value={user?.email}
			hidden
		/>
		<Card.Content>
			<Form.Errors {form} />
			<Form.Field {form} name="new_password">
				<Form.Control let:attrs>
					<Form.Label>New Password</Form.Label>
					<Input
						{...attrs}
						type="password"
						autocomplete="new-password"
						disabled={$submitting}
						required
						bind:value={$formData.new_password}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="confirm_password">
				<Form.Control let:attrs>
					<Form.Label>Confirm New Password</Form.Label>
					<Input
						{...attrs}
						type="password"
						autocomplete="new-password"
						disabled={$submitting}
						required
						bind:value={$formData.confirm_password}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</Card.Content>
		<Card.Footer class="flex gap-2">
			<Form.Button type="submit" disabled={$submitting || !$tainted}>
				{#if $submitting}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					{recoverySession ? 'Resetting Password…' : 'Creating Password…'}
				{:else}
					{recoverySession ? 'Reset Password' : 'Create Password'}
				{/if}
			</Form.Button>
			{#if $message?.success}
				<p class="text-xs text-green-700">{$message.success}</p>
			{:else if !$tainted}
				<p class="text-xs text-muted-foreground">
					Fill in the form to create your password.
				</p>
			{/if}
		</Card.Footer>
	</form>
</Card.Root>
