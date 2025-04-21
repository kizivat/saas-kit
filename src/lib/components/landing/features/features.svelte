<script lang="ts">
	import { cn } from '$lib/utils';
	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		[key: string]: unknown;
	}

	let { ...props }: Props = $props();
</script>

<dl
	class={cn(
		'grid grid-flow-dense grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-20',
		props.class,
	)}
>
	{@render props.children?.()}
</dl>
