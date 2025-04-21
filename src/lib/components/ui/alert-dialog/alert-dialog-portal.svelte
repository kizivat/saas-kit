<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	let { children, ...rest }: Props = $props();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = AlertDialogPrimitive.PortalProps;
</script>

<AlertDialogPrimitive.Portal {...rest}>
	{@render children?.()}
</AlertDialogPrimitive.Portal>
