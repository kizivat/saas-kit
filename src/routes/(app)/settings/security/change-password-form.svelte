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
		changePasswordFormSchema,
		createPasswordFormSchema,
		type ChangePasswordFormSchema,
	} from './schema';

	export let data: SuperValidated<Infer<ChangePasswordFormSchema>>;
	export let user: User | null;

	const changeForm = superForm(data, {
		validators: zodClient(changePasswordFormSchema),
	});

	const createForm = superForm(data, {
		validators: zodClient(createPasswordFormSchema),
	});

	$: isUpdate = 'old_password' in data.data;

	$: ({
		form: formData,
		enhance,
		submitting,
		tainted,
		message,
	} = isUpdate ? changeForm : createForm);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>
			{#if isUpdate}
				Change Password
			{:else}
				Create Password
			{/if}
		</Card.Title>
		<Card.Description>
			{#if isUpdate}
				Change the password associated with your account.
			{:else}
				Create a password for your account.
			{/if}
		</Card.Description>
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
			<Form.Errors form={isUpdate ? changeForm : createForm} />
			{#if isUpdate}
				<Form.Field
					form={isUpdate ? changeForm : createForm}
					name="old_password"
				>
					<Form.Control let:attrs>
						<Form.Label>Old Password</Form.Label>
						<Input
							{...attrs}
							type="password"
							autocomplete="current-password"
							required
							bind:value={$formData.old_password}
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			{/if}
			<Form.Field form={isUpdate ? changeForm : createForm} name="new_password">
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
			<Form.Field
				form={isUpdate ? changeForm : createForm}
				name="confirm_password"
			>
				<Form.Control let:attrs>
					<Form.Label>Confirm Password</Form.Label>
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
					Updating password…
				{:else}
					Update Password
				{/if}
			</Form.Button>
			{#if $message?.success}
				<p class="text-xs text-green-700">{$message.success}</p>
			{:else if !$tainted}
				<p class="text-xs text-muted-foreground">
					Fill in the form to update your password.
				</p>
			{/if}
		</Card.Footer>
	</form>
</Card.Root>
