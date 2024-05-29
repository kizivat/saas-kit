<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { HTMLLiAttributes } from 'svelte/elements';
	import ChevronRight from '~icons/lucide/chevron-right';

	type $$Props = HTMLLiAttributes & {
		el?: HTMLLIElement;
	};

	export let el: $$Props['el'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<li
	role="presentation"
	aria-hidden="true"
	class={cn('[&>svg]:size-3.5', className)}
	bind:this={el}
	{...$$restProps}
>
	<slot>
		<ChevronRight />
	</slot>
</li>
