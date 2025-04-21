<script lang="ts">
	interface Props {
		anchor?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { anchor = undefined, children }: Props = $props();
</script>

<section id={anchor} class="flex flex-col gap-10">
	{@render children?.()}
</section>
