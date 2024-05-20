<script lang="ts">
	import PricingModule from '../../../(marketing)/pricing/pricing_module.svelte';
</script>

<svelte:head>
	<title>Select a Plan</title>
</svelte:head>

<div
	class="mt-4 flex min-h-[100vh] place-content-center content-center items-center pb-12 text-center"
>
	<div class="flex w-full flex-col px-6">
		<div>
			<h1 class="mb-6 text-2xl font-bold">Select a Plan</h1>
			<PricingModule callToAction="Select Plan" />
		</div>
	</div>
</div>
