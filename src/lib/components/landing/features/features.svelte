<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<dl
	class={cn(
		'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4',
		$$props.class,
	)}
>
	<slot />
</dl>
