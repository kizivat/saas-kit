<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<Card.Root>
	<Card.Header>
		<div class="flex flex-nowrap items-center gap-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current text-yellow-500 dark:text-yellow-400"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/></svg
			>
			<Card.Title>Demo Content</Card.Title>
		</div>
		<Card.Description>
			This page is just a placeholder. Replace this page with your app's content
			and functionality.
		</Card.Description>
	</Card.Header>
	<Card.Content>
		The <a href="/settings" class="underline">settings</a> page is a functional demo.
	</Card.Content>
</Card.Root>
