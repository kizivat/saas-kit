<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<ul class={cn('flex w-full flex-col gap-2 divide-y text-sm', $$props.class)}>
	<slot />
</ul>
