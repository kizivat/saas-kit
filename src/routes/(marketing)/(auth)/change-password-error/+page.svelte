<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import LucideOctagonAlert from '~icons/lucide/octagon-alert';
</script>

<svelte:head>
	<title>Current Password Incorrect</title>
</svelte:head>

<Card.Root>
	<Card.Header class="flex flex-row flex-nowrap items-center gap-2 font-bold">
		<LucideOctagonAlert class="text-destructive" />
		<h1>Current Password Incorrect</h1>
	</Card.Header>
	<Card.Content class="flex max-w-prose flex-col gap-2">
		<p>
			You attempted to edit your account with an incorrect current password, and
			have been logged out.
		</p>
		<p>
			If you remember your password <a href="/login" class="underline"
				>sign in</a
			> and try again.
		</p>
		<p>
			If you forgot your password <a href="/forgot-password" class="underline"
				>reset it</a
			>.
		</p>
	</Card.Content>
</Card.Root>
