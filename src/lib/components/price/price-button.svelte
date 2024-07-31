<script lang="ts">
	import { cn } from '$lib/utils';
	import Stripe from 'stripe';
	import { Button, type ButtonProps } from '../ui/button';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = ButtonProps & {
		price: Stripe.Price;
	};

	export let price: Stripe.Price;
	export let disabled: boolean | null | undefined = undefined;
	let cls: string | null | undefined = undefined;
	export { cls as class };
</script>

{#if price.custom_unit_amount !== null}
	<Button type="submit" class={cls} {disabled} {...$$restProps}>
		<slot />
	</Button>
{:else}
	<Button
		href="/checkout/{price.id}"
		class={cn(disabled && 'cursor-not-allowed opacity-50', cls)}
		on:click={disabled ? (e) => e.preventDefault() : undefined}
		{...$$restProps}
	>
		<slot />
	</Button>
{/if}
