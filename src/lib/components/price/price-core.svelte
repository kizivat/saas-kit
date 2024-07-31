<script lang="ts" generics="T">
	import Stripe from 'stripe';

	export let price: Stripe.Price;
</script>

{#if price.custom_unit_amount !== null}
	<form method="GET" action="/checkout/{price.id}">
		<slot />
	</form>
{:else}
	<slot />
{/if}
