<script lang="ts">
	import { cn } from '$lib/utils';

	export let emphasized = false;
</script>

<div
	class={cn(
		'[&>*]:h-full',
		emphasized &&
			'row-[1] md:row-[unset] scale-105 rounded-lg ring-1 ring-primary ring-offset-4 ring-offset-background',
		emphasized && '[&>*]:border-none',
	)}
>
	<slot />
</div>
