<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import type { Builder } from 'bits-ui';

	export let href: string;
	export let activeClass: string;
	export let builder: Builder | undefined = undefined;
	let cls: string = '';
	export { cls as class };

	$: active = $page.url.pathname.startsWith(href);
</script>

{#if builder}
	<a
		{href}
		class={cn(cls, active && activeClass)}
		{...$$restProps}
		use:builder.action
		{...builder}
	>
		<slot />
	</a>
{:else}
	<a {href} class={cn(cls, active && activeClass)} {...$$restProps}>
		<slot />
	</a>
{/if}
