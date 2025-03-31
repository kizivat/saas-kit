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

	const { form: formData, enhance, submitting } = form;
</script>

<form
	method="POST"
	action="?redirectTo={encodeURIComponent(
		`${$page.url.origin}/auth/callback${$page.url.search}`,
	)}"
	use:enhance
	class="grid gap-4"
>
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
	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<div class="mb-2 flex items-center">
				<Form.Label>Password</Form.Label>
				<a
					href="/forgot-password"
					class="ml-auto inline-block text-sm text-muted-foreground underline"
				>
					Forgot password?
				</a>
			</div>
			<Input
				{...attrs}
				type="password"
				placeholder="••••••••"
				required
				bind:value={$formData.password}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button class="w-full" disabled={$submitting}>
		{#if $submitting}
			<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
			Logging in…
		{:else}
			Log in
		{/if}
	</Form.Button>
</form>
