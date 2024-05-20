<script lang="ts">
	import { pricingPlans } from './pricing_plans';

	// Module context
	export let highlightedPlanId: string = '';
	export let callToAction: string;
	export let currentPlanId: string = '';
	export let center = true;

	type PlanFeatureRow = {
		name: string;
		freeIncluded?: boolean;
		proIncluded?: boolean;
		freeString?: string;
		proString?: string;
		header?: boolean;
	};

	const planFeatures: PlanFeatureRow[] = [
		{
			name: 'Section 1',
			header: true,
		},
		{
			name: 'Feature 1',
			freeIncluded: true,
			proIncluded: true,
		},
		{
			name: 'Feature 2',
			freeIncluded: false,
			proIncluded: true,
		},
		{
			name: 'Feature 3',
			freeString: '3',
			proString: 'Unlimited',
		},
		{
			name: 'Section 2',
			header: true,
		},
		{
			name: 'Feature 4',
			freeIncluded: true,
			proIncluded: true,
		},
		{
			name: 'Feature 5',
			freeIncluded: false,
			proIncluded: true,
		},
	];
</script>

<div
	class="flex flex-col gap-10 lg:flex-row {center
		? 'place-content-center'
		: ''} flex-wrap"
>
	{#each pricingPlans as plan}
		<div
			class="card card-bordered flex-none {plan.id === highlightedPlanId
				? 'border-primary'
				: 'border-gray-200'} min-w-[260px] max-w-[310px] flex-1 flex-grow p-6 shadow-xl"
		>
			<div class="flex h-full flex-col">
				<div class="text-xl font-bold">{plan.name}</div>
				<p class="mt-2 text-sm leading-relaxed text-gray-500">
					{plan.description}
				</p>
				<div class="mt-auto pt-4 text-sm text-gray-600">
					Plan Includes:
					<ul class="mt-2 list-inside list-disc space-y-1">
						{#each plan.features as feature}
							<li class="">{feature}</li>
						{/each}
						<ul></ul>
					</ul>
				</div>
				<div class="pt-8">
					<span class="text-4xl font-bold">{plan.price}</span>
					<span class="text-gray-400">{plan.priceIntervalName}</span>
					<div class="mt-6 flex flex-1 flex-row items-center pt-4">
						{#if plan.id === currentPlanId}
							<div
								class="btn btn-outline btn-success no-animation mx-auto w-[80%] cursor-default"
							>
								Current Plan
							</div>
						{:else}
							<a
								href={'/account/subscribe/' +
									(plan?.stripe_price_id ?? 'free_plan')}
								class="btn btn-primary mx-auto w-[80%]"
							>
								{callToAction}
							</a>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<h1 class="mt-24 text-center text-2xl font-bold">Pricing FAQ</h1>
<div class="flex place-content-center">
	<div class="join join-vertical mx-auto max-w-xl py-6">
		<div class="collapse-arrow join-item collapse border border-primary">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-lg font-medium">
				Is this template free to use?
			</div>
			<div class="collapse-content">
				<p>Yup! This template is free to use for any project.</p>
			</div>
		</div>
		<div class="collapse-arrow join-item collapse border border-primary">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-lg font-medium">
				Why does a free template have a pricing page?
			</div>
			<div class="collapse-content">
				<p>
					The pricing page is part of the boilerplate. It shows how the pricing
					page integrates into the billing portal and the Stripe Checkout flows.
				</p>
			</div>
		</div>
		<div class="collapse-arrow join-item collapse border border-primary">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-lg font-medium">
				What license is the template under?
			</div>
			<div class="collapse-content">
				<p>The template is under the MIT license.</p>
			</div>
		</div>
		<div class="collapse-arrow join-item collapse border border-primary">
			<input type="radio" name="faq-accordion" />
			<div class="collapse-title text-lg font-medium">
				Can I try out purchase flows without real a credit card?
			</div>
			<div class="collapse-content">
				<p>
					Our demo page <a href="https://saasstarter.work" class="link"
						>SaasStarter.work</a
					> has a functional demo page, using Stripe's test environment.
				</p>
				<p class="mt-4">
					You can use the credit card number 4242 4242 4242 4242 with any future
					expiry date to test the payment and upgrade flows.
				</p>
			</div>
		</div>
	</div>
</div>

<svg style="display:none" version="2.0">
	<defs>
		<symbol
			id="checkcircle"
			viewBox="0 0 24 24"
			stroke-width="2"
			fill="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
			/>
		</symbol>
	</defs>
</svg>

<svg style="display:none" version="2.0">
	<defs>
		<symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
			<path
				d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
			/>
		</symbol>
	</defs>
</svg>

<h1 class="mt-16 text-center text-2xl font-bold">Plan Features</h1>
<h2 class="mt-1 pb-3 text-center text-xl text-slate-500">
	Example feature table
</h2>

<div class="mx-auto mt-4 max-w-xl overflow-visible">
	<table class="table">
		<thead
			class="bg-base-100 sticky top-0 z-10 bg-opacity-50 text-lg backdrop-blur"
		>
			<tr>
				<th></th>
				<th class="text-center">Free</th>
				<th class="text-center">Pro</th>
			</tr>
		</thead>
		<tbody>
			{#each planFeatures as feature}
				{#if feature.header}
					<tr class="bg-base-200 font-bold">
						<td colspan="3">{feature.name} </td>
					</tr>
				{:else}
					<tr class="relative">
						<td>{feature.name} </td>
						<td class="text-center">
							{#if feature.freeString}
								{feature.freeString}
							{:else if feature.freeIncluded}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="text-success ml-2 inline h-8 w-8"
								>
									<use href="#checkcircle" />
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="text-base-200 inline h-[26px] w-[26px]"
								>
									<use href="#nocircle" />
								</svg>
							{/if}
						</td>
						<td class="text-center">
							{#if feature.proString}
								{feature.proString}
							{:else if feature.proIncluded}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="text-success ml-2 inline h-8 w-8"
								>
									<use href="#checkcircle" />
								</svg>
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="text-base-200 inline h-[26px] w-[26px]"
								>
									<use href="#nocircle" />
								</svg>
							{/if}
						</td>
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</div>
