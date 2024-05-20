<script lang="ts">
	type $$Props = {
		level?: 2 | 3 | 4 | 5 | 6;
		anchor?: string;
	};

	export let level: 2 | 3 | 4 | 5 | 6 = 2;
	export let anchor: string | undefined = undefined;

	const elements = ['h2', 'h3', 'h4', 'h5', 'h6'];
</script>

<svelte:element
	this={elements[level - 2]}
	id={anchor}
	{...$$restProps}
	class="font-bold text-xl md:text-3xl lg:text-4xl text-center"
>
	<slot />
</svelte:element>
