<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<dl
	class={cn(
		'grid grid-flow-dense grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-20',
		$$props.class,
	)}
>
	<slot />
</dl>
