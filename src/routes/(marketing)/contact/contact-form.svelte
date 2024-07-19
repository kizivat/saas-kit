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

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
	});

	const { form: formData, enhance, submitting, message } = form;
</script>

<form method="POST" use:enhance class="grid gap-4">
	{#if $message?.success}
		<p class="text-sm text-green-700">{$message.success}</p>
	{:else}
		<Form.Errors {form} />
		<div class="flex flex-wrap gap-2">
			<Form.Field class="flex-1" {form} name="name">
				<Form.Control let:attrs>
					<Form.Label>Name</Form.Label>
					<Input
						{...attrs}
						type="text"
						placeholder="John Doe"
						required
						bind:value={$formData.name}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field class="flex-1" {form} name="email">
				<Form.Control let:attrs>
					<Form.Label class="mb-2">Emial</Form.Label>
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
		</div>
		<Form.Field class="flex-1" {form} name="subject">
			<Form.Control let:attrs>
				<Form.Label class="mb-2">Subject</Form.Label>
				<Input
					{...attrs}
					type="text"
					placeholder="Collaboration request"
					required
					bind:value={$formData.subject}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field {form} name="body">
			<Form.Control let:attrs>
				<Form.Label class="mb-2">Message</Form.Label>
				<Textarea
					rows={10}
					{...attrs}
					placeholder="Type your message here."
					bind:value={$formData.body}
				/>
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
