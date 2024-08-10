<script lang="ts">
	import { cn } from '$lib/utils';

	export let emphasized = false;
</script>

<div
	class={cn(
		'[&>*]:h-full',
		emphasized &&
			'z-10 row-[1] scale-110 rounded-lg border border-primary md:row-[unset]',
		emphasized && '[&>*]:border-none [&>*]:shadow-none',
	)}
>
	<slot />
</div>
