<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { WebsiteName } from '../../../../config';
	import SocialsAuth from '../components/socials-auth.svelte';
	import RegisterForm from './register-form.svelte';

	export let data;
	export let form;

	// Check form status
	$: registrationSuccess = form?.success;
	$: userEmail = form?.email;
	$: signupDisabled = form?.signupDisabled;
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
{#if registrationSuccess}
	<Alert.Root
		class={cn(
			'mb-6',
			'border-green-700 bg-green-50 text-green-700',
			'dark:border-green-700 dark:bg-green-950 dark:text-green-100',
		)}
		variant="default"
	>
		<Alert.Title>Verification email sent</Alert.Title>
		<Alert.Description>
			We've sent a confirmation email to <strong>{userEmail}</strong>. Please
			check your inbox and follow the instructions to verify your account.
		</Alert.Description>
	</Alert.Root>
	<p class="text-center text-sm">
		Didn't receive the email? Check your spam folder or <a
			href="/register"
			class="underline">try again</a
		>.
	</p>
{:else if signupDisabled}
	<Alert.Root class="mb-6" variant="destructive">
		<Alert.Title>Signups temporarily disabled</Alert.Title>
		<Alert.Description>
			We're sorry, but new user registration is currently disabled. Please try
			again later or contact support for assistance.
		</Alert.Description>
	</Alert.Root>
	<p class="text-center text-sm">
		Already have an account? <a href="/login" class="underline">Log in</a>.
	</p>
{:else}
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
{/if}
