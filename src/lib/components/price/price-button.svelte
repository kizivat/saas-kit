<script lang="ts">
	import { cn } from '$lib/utils';
	import Stripe from 'stripe';
	import { Button, type ButtonProps } from '../ui/button';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = ButtonProps & {
		price: Stripe.Price;
	};

	interface Props {
		price: Stripe.Price;
		disabled?: boolean | null | undefined;
		class?: string | null | undefined;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let {
		price,
		disabled = undefined,
		class: cls = undefined,
		children,
		...rest
	}: Props = $props();
</script>

{#if price.custom_unit_amount !== null}
	<Button type="submit" class={cls} {disabled} {...rest}>
		{@render children?.()}
	</Button>
{:else}
	<Button
		href="/checkout/{price.id}"
		class={cn(disabled && 'cursor-not-allowed opacity-50', cls)}
		onclick={disabled ? (e) => e.preventDefault() : undefined}
		{...rest}
	>
		{@render children?.()}
	</Button>
{/if}
