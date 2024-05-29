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
	import { infoFormSchema, type InfoFormSchema } from './schema';

	export let data: SuperValidated<Infer<InfoFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(infoFormSchema),
		resetForm: false,
	});

	const { form: formData, enhance, submitting, tainted, message } = form;
</script>

<Card.Root>
	<form method="POST" action="?/updateProfile" use:enhance>
		<Card.Header>
			<Card.Title>Info</Card.Title>
			<Card.Description>
				Change the name associated with your account.
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<Form.Field {form} name="name">
				<Form.Control let:attrs>
					<Form.Label>Full Name</Form.Label>
					<Input
						{...attrs}
						type="name"
						placeholder="John Doe"
						required
						bind:value={$formData.name}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</Card.Content>
		<Card.Footer class="flex gap-2">
			<Form.Button disabled={$submitting || !$tainted}>
				{#if $submitting}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
					Updating info…
				{:else}
					Update Info
				{/if}
			</Form.Button>
			{#if $message?.success}
				<p class="text-xs text-green-700">{$message.success}</p>
			{:else if !$tainted}
				<span class="text-xs italic text-muted-foreground"> Unmodified </span>
			{/if}
		</Card.Footer>
	</form>
</Card.Root>
