<script lang="ts">
	import * as Section from '$lib/components/landing/section';
	import { WebsiteName } from './../../config';
	import Features from './components/sections/features/features.svelte';
	import HeroSection from './components/sections/hero.svelte';
	import LogosCloud from './components/sections/logos-cloud.svelte';
	import Pricing from './components/sections/pricing.svelte';
	import Testimonials from './components/sections/testimonials.svelte';
</script>

<svelte:head>
	<title>{WebsiteName}</title>
	<meta name="description" content="{WebsiteName} Home Page" />
</svelte:head>

<div class="flex flex-col gap-20 mb-40">
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
		<Section.Title>Features</Section.Title>
		<Features />
	</Section.Root>
	<Section.Root>
		<Section.Title>Testimonials</Section.Title>
		<Testimonials />
	</Section.Root>
	<Section.Root anchor="pricing">
		<Section.Title>Pricing</Section.Title>
		<Pricing />
	</Section.Root>
</div>
