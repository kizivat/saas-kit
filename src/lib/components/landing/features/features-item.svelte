<script lang="ts">
	import { cn } from '$lib/utils';
	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		[key: string]: unknown;
	}

	let { ...props }: Props = $props();
</script>

<div class={cn('col-[1] sm:[&:nth-child(4n+3)]:col-[2]', props.class)}>
	{@render props.children?.()}
</div>
