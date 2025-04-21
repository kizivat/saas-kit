<script lang="ts">
	import { cn } from '$lib/utils';
	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		[key: string]: unknown;
	}

	let { ...props }: Props = $props();
</script>

<dt class={cn('text-2xl font-bold', props.class)}>
	{@render props.children?.()}
</dt>
