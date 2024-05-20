<script lang="ts">
	import { cn } from '$lib/utils.js';

	type $$Props =
		| {
				src: string;
				alt: string;
				href?: string;
		  }
		| {
				href?: string;
		  };

	export let href: string | undefined = undefined;
	export let src: string | undefined = undefined;
	export let alt: string | undefined = undefined;
</script>

<li
	class={cn(
		'[&:hover_svg_*]:fill-foreground [&_svg]:size-16 [&_svg_*]:fill-muted-foreground [&_svg_*]:transition-colors',
		$$props.class,
	)}
>
	{#if $$slots.default}
		{#if href}
			<a {href} target="_blank">
				<slot />
			</a>
		{:else}
			<slot />
		{/if}
	{:else if href}
		<a {href} target="_blank">
			<img {src} {alt} />
		</a>
	{:else}
		<img {src} {alt} />
	{/if}
</li>
