<script lang="ts">
	import { cn } from '$lib/utils';
	import LucideCheck from '~icons/lucide/check';
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { ...props }: Props = $props();
</script>

<li class={cn('flex flex-col divide-muted pt-2', props.class)}>
	<div class="flex items-center gap-2">
		<LucideCheck class="h-4 w-4 text-primary" />
		{@render props.children?.()}
	</div>
</li>
