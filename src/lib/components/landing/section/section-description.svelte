<script lang="ts">
	import { cn } from '$lib/utils';
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { ...props }: Props = $props();
</script>

<p
	class={cn(
		'mx-auto max-w-prose text-center text-sm text-muted-foreground sm:text-base',
		props.class,
	)}
>
	{@render props.children?.()}
</p>
