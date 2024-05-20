<script lang="ts">
	import { cn } from '$lib/utils';

	export let variant: 'masonry' | 'carousel' = 'masonry';
</script>

<div
	class={cn(
		'mx-auto',
		variant === 'masonry' &&
			'grid columns-2 space-y-4 sm:block md:grid-cols-2 lg:columns-3 lg:grid-cols-4 lg:gap-6 lg:space-y-6',
		// variant === 'carousel' && '',
		$$props.class,
	)}
>
	<slot />
</div>
