<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = CollapsiblePrimitive.ContentProps;

	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { children, ...rest }: Props = $props();
</script>

<CollapsiblePrimitive.Content {...rest}>
	{@render children?.()}
</CollapsiblePrimitive.Content>
