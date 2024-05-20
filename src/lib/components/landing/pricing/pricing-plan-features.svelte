<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<ul class={cn('flex flex-col gap-2 divide-y w-full text-sm', $$props.class)}>
	<slot />
</ul>
