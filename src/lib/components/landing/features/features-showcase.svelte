<script lang="ts">
	import { cn } from '$lib/utils';
	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		[key: string]: unknown;
	}

	let { ...props }: Props = $props();
</script>

<div class={cn('sm:col-[2] [&:nth-child(4n)]:col-[1]', props.class)}>
	{@render props.children?.()}
</div>
