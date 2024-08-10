<script lang="ts">
	import * as Pricing from '$lib/components/landing/pricing';
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
		<Card.Root class="relative">
			<div class="absolute right-5 top-1.5">
				<Price.Badges price={prices[0]} />
			</div>
			<Card.Header>
				<Card.Title>{prices[0].product.name}</Card.Title>
				<Card.Description>
					{prices[0].product.description ?? ''}
				</Card.Description>
			</Card.Header>
			<Price.Core price={prices[0]}>
				<Card.Content class="flex flex-col gap-6">
					<!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
					<Price.Amount price={prices[0]} />
					<Price.Button price={prices[0]}>Get Started</Price.Button>
				</Card.Content>
			</Price.Core>
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
		<Card.Root class="relative">
			<div class="absolute right-2 top-1.5">
				<Price.Badges price={prices[1]} />
			</div>
			<Card.Header>
				<Card.Title>{prices[1].product.name}</Card.Title>
				<Card.Description>
					{prices[1].product.description ?? ''}
				</Card.Description>
			</Card.Header>
			<Price.Core price={prices[1]}>
				<Card.Content class="flex flex-col gap-6">
					<!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
					<Price.Amount price={prices[1]} />
					<Price.Button price={prices[1]}>Get Started</Price.Button>
				</Card.Content>
			</Price.Core>
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
		<Card.Root class="relative">
			<div class="absolute right-2 top-1.5">
				<Price.Badges price={prices[2]} />
			</div>
			<Card.Header>
				<Card.Title>{prices[2].product.name}</Card.Title>
				<Card.Description>
					{prices[2].product.description ?? ''}
				</Card.Description>
			</Card.Header>
			<Price.Core price={prices[2]}>
				<Card.Content class="flex flex-col gap-6">
					<!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
					<Price.Amount price={prices[2]} />
					<Price.Button price={prices[2]}>Get Started</Price.Button>
				</Card.Content>
			</Price.Core>
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
