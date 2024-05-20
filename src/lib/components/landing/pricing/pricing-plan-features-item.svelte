<script lang="ts">
	import { cn } from '$lib/utils';
	import LucideCheck from '~icons/lucide/check';
</script>

<li class={cn('flex flex-col pt-2 divide-muted', $$props.class)}>
	<div class="flex items-center gap-2">
		<LucideCheck class="w-4 h-4 text-primary" />
		<slot />
	</div>
</li>
