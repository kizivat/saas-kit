<script lang="ts">
	import * as Pricing from '$lib/components/landing/pricing';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<Pricing.Root>
	<Pricing.Plan>
		<Card.Root>
			<Card.Header>
				<Card.Title>Free</Card.Title>
				<Card.Description>
					This kit is free of charge forever. You don't have to pay me anything.
				</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-3">
				<span class="text-5xl font-black tracking-tight">$0</span>
				<Button>Get Started</Button>
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
				<Card.Title>Say thanks</Card.Title>
				<Card.Description class="[&>span]:ms-1">
					<!--
						The card number is visually 
						formatted via `spans.ms-1` to be easier to read, but still
						selectable by double-clicking.
					 -->
					You can use this for free. But if you wish so you can buy me an overpriced
					coffee to say thanks. Or you can just use Stripe's test card number
					<span>4242</span><span>4242</span><span>4242</span><span>4242</span>.
				</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-3">
				<div>
					<span class="text-5xl font-black tracking-tight">$5</span>
					<span class="text-base text-muted-foreground tracking-wide">
						/ lifetime
					</span>
				</div>
				<Button>Get Started</Button>
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
				<Card.Title>Sponsor</Card.Title>
				<Card.Description>
					If you want to sponsor this kit and earn a spot in the logo cloud
					section, this way.
				</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-3">
				<div>
					<span class="text-5xl font-black tracking-tight">$100</span>
					<span class="text-base text-muted-foreground tracking-wide">
						/ lifetime
					</span>
				</div>

				<Button>Get Started</Button>
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
