<script lang="ts">
	import * as Pricing from '$lib/components/landing/pricing';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Stripe from 'stripe';
	import * as Price from '../../../../lib/components/price/index.js';

	type Price = Stripe.Price & {
		product: Stripe.Product;
	};
	export let prices: readonly [Price, Price, Price];
</script>

<Pricing.Root>
	<Pricing.Plan>
		<Card.Root>
			<Card.Header>
				<Card.Title>{prices[0].product.name}</Card.Title>
				<Card.Description>
					{prices[0].product.description ?? ''}
				</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-6">
				<!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
				<Price.Amount price={prices[0]} />
				<Button href="/checkout/{prices[0].id}">Get Started</Button>
			</Card.Content>
			<Card.Footer>
				<Pricing.PlanFeatures>
					<Pricing.FeatureItem>Everything</Pricing.FeatureItem>
					<Pricing.FeatureItem>
						Good kickstart for your product
					</Pricing.FeatureItem>
				</Pricing.PlanFeatures>
			</Card.Footer>
		</Card.Root>
	</Pricing.Plan>
	<Pricing.Plan emphasized>
		<Card.Root>
			<Card.Header>
				<Card.Title>{prices[1].product.name}</Card.Title>
				<Card.Description>
					{prices[1].product.description ?? ''}
				</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-6">
				<!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
				<Price.Amount price={prices[1]} />
				<Button href="/checkout/{prices[1].id}">Get Started</Button>
			</Card.Content>
			<Card.Footer>
				<Pricing.PlanFeatures>
					<Pricing.FeatureItem>Everything from free</Pricing.FeatureItem>
					<Pricing.FeatureItem>
						Warm fuzzy feeling for both of us
					</Pricing.FeatureItem>
				</Pricing.PlanFeatures>
			</Card.Footer>
		</Card.Root>
	</Pricing.Plan>
	<Pricing.Plan>
		<Card.Root>
			<Card.Header>
				<Card.Title>{prices[2].product.name}</Card.Title>
				<Card.Description>
					{prices[2].product.description ?? ''}
				</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-6">
				<!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
				<Price.Amount price={prices[2]} />
				<Button href="/checkout/{prices[2].id}">Get Started</Button>
			</Card.Content>
			<Card.Footer>
				<Pricing.PlanFeatures>
					<Pricing.FeatureItem>
						Everything from free and "Say thanks"
					</Pricing.FeatureItem>
					<Pricing.FeatureItem>Logo cloud spot</Pricing.FeatureItem>
					<Pricing.FeatureItem>Your logo in the README</Pricing.FeatureItem>
				</Pricing.PlanFeatures>
			</Card.Footer>
		</Card.Root>
	</Pricing.Plan>
</Pricing.Root>
