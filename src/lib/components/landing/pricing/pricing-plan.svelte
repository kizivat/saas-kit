<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		emphasized?: boolean;
		children?: import('svelte').Snippet;
	}

	let { emphasized = false, children }: Props = $props();
</script>

<div
	class={cn(
		'[&>*]:h-full',
		emphasized &&
			'z-10 row-[1] scale-110 rounded-lg border border-primary md:row-[unset]',
		emphasized && '[&>*]:border-none [&>*]:shadow-none',
	)}
>
	{@render children?.()}
</div>
