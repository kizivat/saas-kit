<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import Stripe from 'stripe';

	export let price: Stripe.Price;
</script>

{#if price.custom_unit_amount !== null}
	<div class="flex flex-row flex-nowrap items-center gap-2">
		<span class="text-4xl">
			<!-- Just to get the currency symbol programatically -->
			{Intl.NumberFormat('en-US', {
				style: 'currency',
				maximumFractionDigits: 0,
				minimumFractionDigits: 0,
				currency: price.currency,
			})
				.format(0)
				.replace(/\d/g, '')}
		</span>
		<Input
			type="number"
			class="text-xl"
			value={price.custom_unit_amount.preset
				? price.custom_unit_amount.preset / 100
				: ''}
			placeholder="Enter amount"
		/>
	</div>
{:else if price.unit_amount !== null}
	<div>
		<span class="text-4xl">
			{Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: price.currency,
				maximumFractionDigits: 0,
				currencySign: 'accounting',
			}).format(price.unit_amount / 100)}
		</span>
		{#if price.recurring}
			<span class="text-muted-foreground">
				/ {price.recurring.interval}
			</span>
		{/if}
	</div>
{/if}
