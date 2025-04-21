<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<blockquote class="hyphens-auto whitespace-pre-wrap break-words">
	{@render children?.()}
</blockquote>
