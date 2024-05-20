<script lang="ts">
	import PricingModule from './pricing_module.svelte';
	import { WebsiteName } from './../../../config';
</script>

<svelte:head>
	<title>Pricing</title>
	<meta name="description" content="Pricing details for {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] px-4 pb-8 pt-[5vh]">
	<h1 class="text-center text-3xl font-bold">Pricing</h1>
	<h2 class="mt-1 pb-3 text-center text-xl text-slate-500">
		Totally free, scale to millions of users
	</h2>

	<div class="my-8 w-full">
		<PricingModule callToAction="Get Started" highlightedPlanId="pro" />
	</div>
</div>
