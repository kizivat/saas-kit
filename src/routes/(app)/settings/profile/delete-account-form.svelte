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

	export let data: SuperValidated<Infer<DeleteAccountFormSchema>>;

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
	<Form.Field {form} name="confirmation">
		<Form.Control let:attrs>
			<Form.Label>To confirm, please type in your password:</Form.Label>
			<Input
				{...attrs}
				type="password"
				required
				disabled={$submitting}
				bind:value={$formData.confirmation}
			/>
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
		<Dialog.Close asChild let:builder>
			<Form.Button type="reset" variant="default" builders={[builder]}>
				Cancel
			</Form.Button>
		</Dialog.Close>
	</Dialog.Footer>
</form>
