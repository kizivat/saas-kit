<script lang="ts">
	import { cn } from '$lib/utils';

	export let variant: 'masonry' | 'carousel' = 'masonry';
</script>

<div
	class={cn(
		'mx-auto',
		variant === 'masonry' &&
			'grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 space-y-4 lg:space-y-6',
		// variant === 'carousel' && '',
		$$props.class,
	)}
>
	<slot />
</div>
