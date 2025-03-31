<script lang="ts">
	import { page } from '$app/stores';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import {
		superForm,
		type Infer,
		type SuperValidated,
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import { formSchema, type FormSchema } from './schema';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
	});

	const { form: formData, enhance, submitting, message } = form;
</script>

<form
	method="POST"
	action="?redirectTo={encodeURIComponent(
		`${$page.url.origin}/auth/callback?next=/settings/security`,
	)}"
	use:enhance
	class="grid gap-4"
>
	{#if $message?.success}
		<p class="text-sm text-green-700">{$message.success}</p>
		<p class="text-sm text-muted-foreground">
			Didn't receive the email? Check your spam folder or
			<a href="/forgot-password" class="underline">try again</a>.
		</p>
	{:else}
		<Form.Errors {form} />
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label class="mb-2">Email</Form.Label>
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
		<Form.Button class="w-full" disabled={$submitting}>
			{#if $submitting}
				<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				Sending reset password instructions…
			{:else}
				Send reset password instructions
			{/if}
		</Form.Button>
	{/if}
</form>
