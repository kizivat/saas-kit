<script lang="ts">
	import Stripe from 'stripe';
	import { Button } from '../ui/button';

	export let price: Stripe.Price;
</script>

{#if price.custom_unit_amount !== null}
	<Button type="submit">
		<slot />
	</Button>
{:else}
	<Button href="/checkout/{price.id}">
		<slot />
	</Button>
{/if}
