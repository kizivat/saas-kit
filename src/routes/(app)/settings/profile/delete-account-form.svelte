<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import {
		superForm,
		type Infer,
		type SuperValidated,
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import {
		deleteAccountFormSchema,
		type DeleteAccountFormSchema,
	} from './schema';
	import FormErrors from '$lib/components/ui/form/form-errors.svelte';

	interface Props {
		data: SuperValidated<Infer<DeleteAccountFormSchema>>;
	}

	let { data }: Props = $props();

	const form = superForm(data, {
		validators: zodClient(deleteAccountFormSchema),
		resetForm: false,
	});

	const { form: formData, enhance, tainted, submitting } = form;
</script>

<form
	class="flex flex-col gap-3"
	method="POST"
	action="?/deleteAccount"
	use:enhance
>
	<FormErrors {form} />
	<Form.Field {form} name="confirmation">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>To confirm, please type in your password:</Form.Label>
				<Input
					{...props}
					type="password"
					required
					disabled={$submitting}
					bind:value={$formData.confirmation}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Dialog.Footer>
		<Form.Button
			type="submit"
			class="border-destructive text-destructive enabled:hover:bg-destructive/10 enabled:hover:text-destructive"
			variant="outline"
			disabled={$submitting || !$tainted}
		>
			{#if $submitting}
				<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				Deleting Account…
			{:else}
				Delete Account
			{/if}
		</Form.Button>
		<Dialog.Close>
			{#snippet child({ props })}
				<Form.Button type="reset" variant="default" {...props}>
					Cancel
				</Form.Button>
			{/snippet}
		</Dialog.Close>
	</Dialog.Footer>
</form>
