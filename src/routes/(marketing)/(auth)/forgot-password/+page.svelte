<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { WebsiteName } from '../../../../config';
	import ForgotPasswordForm from './forgot-password-form.svelte';

	export let data;
</script>

<svelte:head>
	<title>Forgot {WebsiteName} Password</title>
</svelte:head>

<Card.Root class="mx-auto max-w-sm">
	<Card.Header>
		<Card.Title tag="h1" class="text-2xl">
			Forgot <span class="sr-only">{WebsiteName}</span> password
		</Card.Title>
	</Card.Header>
	<Card.Content class="flex flex-col gap-4">
		<div class="flex flex-col gap-3">
			<p class="text-sm text-muted-foreground">
				Enter your email address below and we'll send you a reset password
				instructions.
			</p>
			<ForgotPasswordForm data={data.form} />
			<div class="mt-4 text-center text-sm">
				Remember your password? <a href="/login" class="underline">Log in</a>.
			</div>
		</div>
	</Card.Content>
</Card.Root>
