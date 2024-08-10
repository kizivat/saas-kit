<script lang="ts">
	import * as Section from '$lib/components/landing/section';
	import { WebsiteName } from './../../config';
	import Features from './components/sections/features/features.svelte';
	import HeroSection from './components/sections/hero.svelte';
	import LogosCloud from './components/sections/logos-cloud.svelte';
	import Pricing from './components/sections/pricing.svelte';
	import Testimonials from './components/sections/testimonials.svelte';

	export let data;

	const { prices } = data;
</script>

<svelte:head>
	<title>{WebsiteName}</title>
</svelte:head>

<div class="mb-40 flex flex-col gap-20">
	<Section.Root>
		<HeroSection />
	</Section.Root>
	<Section.Root>
		<Section.Header>
			<Section.Title>Logos Cloud</Section.Title>
			<Section.Description class="text-balance">
				To be honest, the below are just logos of tech stack used in this
				project. They don't work with me. Yet.
			</Section.Description>
		</Section.Header>
		<LogosCloud />
	</Section.Root>
	<Section.Root anchor="features">
		<Section.Header>
			<Section.Title>Features</Section.Title>
		</Section.Header>
		<Features />
	</Section.Root>
	<Section.Root>
		<Section.Header>
			<Section.Title>Testimonials</Section.Title>
		</Section.Header>
		<Testimonials />
	</Section.Root>
	<Section.Root anchor="pricing">
		<Section.Header>
			<Section.Title>Pricing</Section.Title>
			<Section.Description class="text-balance">
				Currently we support subscription based pricing out of the box. However,
				you can extend the boilerplate to support one-time or custom pricing
				models.
			</Section.Description>
		</Section.Header>
		<Pricing {prices} />
	</Section.Root>
</div>
