<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Price from './components/price/index.js';

	export let data;

	let { products } = data;

	$: withDefaultPrices = products.map((product) => {
		return {
			...product,
			prices: product.prices.filter(
				(price) => price.id === product.default_price.id,
			),
		};
	});

	$: withOtherPrices = products.map((product) => {
		return {
			...product,
			prices: product.prices.filter(
				(price) => price.id !== product.default_price.id,
			),
		};
	});

	$: console.log(data, withDefaultPrices, withOtherPrices);
</script>

<svelte:head>
	<title>Billing | Settings</title>
</svelte:head>

<h2 class="text-xl font-semibold">Billing</h2>

<section class="flex flex-col gap-3">
	<h3 class="text-lg font-semibold">Default Prices</h3>
	<ol class="grid gap-4 lg:grid-cols-3">
		{#each withDefaultPrices as product}
			{#each product.prices as price}
				<li
					class="[&:nth-child(2)>.bg-card]:border-2 [&:nth-child(2)>.bg-card]:border-primary [&:nth-child(2)]:scale-105"
				>
					<Card.Root>
						<Card.Header>
							<Card.Title tag="h3">{product.name}</Card.Title>
							<Card.Description>
								<Price.Description {price} />
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<Price.Amount {price} />
						</Card.Content>
						<Card.Footer>
							<Button href="/checkout/{price.id}">Select Plan</Button>
						</Card.Footer>
					</Card.Root>
				</li>
			{/each}
		{/each}
	</ol>
</section>

<section class="flex flex-col gap-3">
	<h3 class="text-lg font-semibold">Other Prices</h3>
	<ol class="grid gap-4 lg:grid-cols-3">
		{#each withOtherPrices as product}
			{#each product.prices as price}
				<li>
					<Card.Root>
						<Card.Header>
							<Card.Title tag="h3">{product.name}</Card.Title>
							<Card.Description>
								<Price.Description {price} />
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<Price.Amount {price} />
						</Card.Content>
						<Card.Footer>
							<Button href="/checkout/{price.id}">Select Plan</Button>
						</Card.Footer>
					</Card.Root>
				</li>
			{/each}
		{/each}
	</ol>
</section>
