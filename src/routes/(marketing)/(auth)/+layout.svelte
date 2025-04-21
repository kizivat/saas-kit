<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="mx-auto flex max-w-screen-lg flex-col items-center">
	<div>
		{@render children?.()}
	</div>
</div>
