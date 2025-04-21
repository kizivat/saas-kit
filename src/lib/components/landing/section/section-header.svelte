<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<header class="flex flex-col items-center gap-2">
	{@render children?.()}
</header>
