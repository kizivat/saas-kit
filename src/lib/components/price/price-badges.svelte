<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { cn } from '$lib/utils';
	import Stripe from 'stripe';

	export let price: Stripe.Price;
</script>

{#if !price.livemode}
	<Badge
		variant="outline"
		class={cn(
			'text-nowrap border-yellow-500 bg-yellow-50 text-yellow-700',
			'dark:border-yellow-600 dark:bg-yellow-800 dark:text-yellow-400',
		)}
	>
		Test Mode
	</Badge>
{/if}
