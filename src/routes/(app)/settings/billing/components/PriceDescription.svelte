<script lang="ts">
	import Stripe from 'stripe';

	export let price: Stripe.Price;
</script>

{#if price.recurring?.interval}
	{price.recurring.interval === 'month' ? 'Monthly Plan' : 'Annual Plan'}
{:else if price.custom_unit_amount}
	Pay what you want
{:else}
	One-time payment
{/if}
