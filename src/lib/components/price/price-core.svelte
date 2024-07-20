<script lang="ts" generics="T">
	import { enhance } from '$app/forms';
	import Stripe from 'stripe';

	export let price: Stripe.Price;
</script>

{#if price.custom_unit_amount !== null}
	<form method="POST" action="/checkout/{price.id}/?/customPrice" use:enhance>
		<slot />
	</form>
{:else}
	<slot />
{/if}
