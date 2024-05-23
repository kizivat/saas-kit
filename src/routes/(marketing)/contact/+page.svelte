<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import ContactForm from './contact-form.svelte';

	export let data;
</script>

<svelte:head>
	<title>Contact SaaS Kit</title>
</svelte:head>

<Card.Root class="mx-auto max-w-lg">
	<Card.Header>
		<Card.Title tag="h1" class="text-2xl">Contact Us</Card.Title>
		<Card.Description>Let us know how we can help you.</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col gap-4">
		<ContactForm data={data.form} />
	</Card.Content>
</Card.Root>
