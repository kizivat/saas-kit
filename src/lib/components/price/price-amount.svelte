<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import Label from '$lib/components/ui/label/label.svelte';
	import Stripe from 'stripe';
	export let price: Stripe.Price;
</script>

{#if price.custom_unit_amount !== null}
	<div class="flex flex-col gap-3">
		<Label for="custom-amount" class="font-normal italic text-muted-foreground">
			Custom amount
		</Label>
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
				id="custom-amount"
				name="customAmount"
				type="number"
				min={price.custom_unit_amount.minimum
					? price.custom_unit_amount.minimum / 100
					: 0}
				max={price.custom_unit_amount.maximum
					? price.custom_unit_amount.maximum / 100
					: 999_999}
				class="text-xl"
				value={price.custom_unit_amount.preset
					? price.custom_unit_amount.preset / 100
					: ''}
			/>
			<span class="self-end text-nowrap text-sm text-muted-foreground">
				/ {price.recurring ? price.recurring.interval : 'lifetime'}
			</span>
		</div>
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
		<span class="text-nowrap text-sm text-muted-foreground">
			/ {price.recurring ? price.recurring.interval : 'lifetime'}
		</span>
	</div>
{/if}
