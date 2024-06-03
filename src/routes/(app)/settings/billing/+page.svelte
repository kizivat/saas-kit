<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';

	export let data;
</script>

<svelte:head>
	<title>Billing | Settings</title>
</svelte:head>

<h2 class="text-xl font-semibold">Billing</h2>
<section>
	<ol class="grid grid-cols-3 gap-4">
		{#each data.products as product}
			{#each product.prices.filter((price) => price.product === product.id) as price}
				<li>
					<Card.Root>
						<Card.Header>
							<Card.Title tag="h3">{product.name}</Card.Title>
							<Card.Description>
								{#if price.recurring?.interval}
									{price.recurring.interval === 'month'
										? 'Monthly Plan'
										: 'Annual Plan'}
								{:else if price.custom_unit_amount}
									Pay what you want
								{:else}
									One-time payment
								{/if}
							</Card.Description>
						</Card.Header>
						<Card.Content>
							{#if price.custom_unit_amount !== null}
								<div class="flex flex-row flex-nowrap items-center gap-2">
									<span class="text-4xl">
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
										<span class="text-muted-foreground"
											>/ {price.recurring.interval}</span
										>
									{/if}
								</div>
							{/if}
						</Card.Content>
						<Card.Footer>
							<Button>Select Plan</Button>
						</Card.Footer>
					</Card.Root>
				</li>
			{/each}
		{/each}
	</ol>
</section>
