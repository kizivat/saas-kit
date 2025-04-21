<script lang="ts">
	import { cn } from '$lib/utils';
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { ...props }: Props = $props();
</script>

<ul class={cn('flex w-full flex-col gap-2 divide-y text-sm', props.class)}>
	{@render props.children?.()}
</ul>
