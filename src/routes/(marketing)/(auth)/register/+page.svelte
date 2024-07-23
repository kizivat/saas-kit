<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import * as Card from '$lib/components/ui/card';
	import { WebsiteName } from '../../../../config';
	import SocialsAuth from '../components/socials-auth.svelte';
	import RegisterForm from './register-form.svelte';

	export let data;
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

{#if data.isCheckout}
	<Alert.Root class="mb-6" variant="warning">
		<Alert.Title>Create an account to proceed</Alert.Title>
		<Alert.Description>
			To continue with purchasing your selected plan, you need to create an
			account first.
		</Alert.Description>
	</Alert.Root>
{/if}
<Card.Root class="mx-auto max-w-sm">
	<Card.Header>
		<Card.Title tag="h1" class="text-2xl">
			Create an account <span class="sr-only">on {WebsiteName}</span>
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
