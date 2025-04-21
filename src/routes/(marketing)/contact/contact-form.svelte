<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import {
		superForm,
		type Infer,
		type SuperValidated,
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import { formSchema, type FormSchema } from './schema';

	interface Props {
		data: SuperValidated<Infer<FormSchema>>;
	}

	let { data }: Props = $props();

	const form = superForm(data, {
		validators: zodClient(formSchema),
	});

	const { form: formData, enhance, submitting, message } = form;
</script>

<form method="POST" use:enhance class="grid gap-4">
	{#if $message?.success}
		<p class="text-sm text-green-700">{$message.success}</p>
	{:else}
		<div class="flex flex-wrap gap-2">
			<Form.Field class="flex-1" {form} name="name">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Name</Form.Label>
						<Input
							{...props}
							type="text"
							placeholder="John Doe"
							required
							bind:value={$formData.name}
						/>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field class="flex-1" {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label class="mb-2">Email</Form.Label>
						<Input
							{...props}
							type="email"
							placeholder="name@example.com"
							required
							bind:value={$formData.email}
						/>
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</div>
		<Form.Field class="flex-1" {form} name="subject">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label class="mb-2">Subject</Form.Label>
					<Input
						{...props}
						type="text"
						placeholder="Collaboration request"
						required
						bind:value={$formData.subject}
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="body">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label class="mb-2">Message</Form.Label>
					<Textarea
						rows={10}
						{...props}
						placeholder="Type your message here."
						bind:value={$formData.body}
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button class="w-full" disabled={$submitting}>
			{#if $submitting}
				<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				Sending message…
			{:else}
				Send message
			{/if}
		</Form.Button>
	{/if}
</form>
