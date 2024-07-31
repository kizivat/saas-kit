<script lang="ts">
	import { enhance } from '$app/forms';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import * as Card from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import Stripe from 'stripe';

	export let userProducts: {
		stripe_product_id: string;
		type: 'subscription' | 'payment';
	}[];
	export let products: Stripe.Product[];
</script>

<section class="flex flex-col gap-3">
	<h3 class="text-lg font-semibold">Your products</h3>
	<ol class="grid grid-cols-1 gap-4">
		{#each userProducts as { stripe_product_id, type }}
			{@const product = products.find(
				(product) => product.id === stripe_product_id,
			)}
			<li>
				<form method="POST" use:enhance>
					<Card.Root>
						<Card.Header
							class="flex flex-row items-baseline justify-between gap-6"
						>
							<Card.Title tag="h4">
								{#if product}
									{product.name}
								{:else}
									Unknown SaaS Kit Product
								{/if}
							</Card.Title>
							<span>
								<Badge
									variant="outline"
									class={cn(
										type === 'subscription' &&
											'border-green-700 bg-green-50 text-green-700',
									)}
								>
									{#if type === 'subscription'}
										Subscription
									{:else}
										One-time purchase
									{/if}
								</Badge>
							</span>
						</Card.Header>
						{#if product?.description}
							<Card.Content>
								<span class="text-sm text-gray-500">{product.description}</span>
							</Card.Content>
						{/if}
					</Card.Root>
				</form>
			</li>
		{/each}
	</ol>
	<p class="text-sm text-muted-foreground">
		You can manage your subscriptions and view invoices in your <a
			class="underline"
			href="/settings/billing/manage">Stripe Customer Portal</a
		>.
	</p>
</section>
