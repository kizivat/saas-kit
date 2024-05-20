<script lang="ts">
	import { cn } from '$lib/utils';

	export let emphasized = false;
</script>

<div
	class={cn(
		'[&>*]:h-full',
		emphasized &&
			'row-[1] md:row-[unset] scale-110 rounded-lg border border-primary',
		emphasized && '[&>*]:border-none [&>*]:shadow-none',
	)}
>
	<slot />
</div>
