<script lang="ts">
	import Stripe from 'stripe';

	interface Props {
		price: Stripe.Price;
		children?: import('svelte').Snippet;
	}

	let { price, children }: Props = $props();
</script>

{#if price.custom_unit_amount !== null}
	<form method="GET" action="/checkout/{price.id}">
		{@render children?.()}
	</form>
{:else}
	{@render children?.()}
{/if}
