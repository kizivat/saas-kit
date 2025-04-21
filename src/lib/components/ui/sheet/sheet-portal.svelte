<script lang="ts">
	import { Dialog as SheetPrimitive } from 'bits-ui';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = SheetPrimitive.PortalProps;

	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { children, ...rest }: Props = $props();
</script>

<SheetPrimitive.Portal {...rest}>
	{@render children?.()}
</SheetPrimitive.Portal>
