<script lang="ts">
	import { cn } from '$lib/utils';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class={cn('grid gap-2 md:grid-cols-3')}>
	{@render children?.()}
</div>
