<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<dl
	class={cn(
		'grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20 grid-flow-dense',
		$$props.class,
	)}
>
	<slot />
</dl>
