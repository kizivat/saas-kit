<script lang="ts">
	interface Props {
		level?: 2 | 3 | 4 | 5 | 6;
		anchor?: string;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { level = 2, children, ...rest }: Props = $props();

	const elements = ['h2', 'h3', 'h4', 'h5', 'h6'];
</script>

<svelte:element
	this={elements[level - 2]}
	{...rest}
	class="text-center text-xl font-bold md:text-3xl lg:text-4xl"
>
	{@render children?.()}
</svelte:element>
