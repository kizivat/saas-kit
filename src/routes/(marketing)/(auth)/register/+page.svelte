<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { WebsiteName } from '../../../../config';
	import SocialsAuth from '../components/socials-auth.svelte';
	import RegisterForm from './register-form.svelte';

	export let data;
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<Card.Root class="mx-auto max-w-sm">
	<Card.Header>
		<Card.Title tag="h1" class="text-2xl">
			Create an account on <span class="sr-only">{WebsiteName}</span>
		</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col gap-4">
		<SocialsAuth />

		<div class="flex flex-col gap-3">
			<p class="text-sm text-muted-foreground">
				Create an account with your email address below.
			</p>
			<RegisterForm data={data.form} />
			<div class="mt-4 text-center text-sm">
				Already have an account?
				<a href="/login" class="underline">Log in</a>.
			</div>
		</div>
	</Card.Content>
</Card.Root>
