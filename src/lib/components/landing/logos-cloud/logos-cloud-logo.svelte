<script lang="ts">
	import { cn } from '$lib/utils.js';

	type $$Props =
		| {
				src: string;
				alt: string;
		  }
		| Record<string, never>;

	export let src: string | undefined = undefined;
	export let alt: string | undefined = undefined;
</script>

<li
	class={cn('[&_svg]:size-16 [&_svg_*]:fill-muted-foreground', $$props.class)}
>
	{#if $$slots.default}
		<slot />
	{:else}
		<img {src} {alt} />
	{/if}
</li>
