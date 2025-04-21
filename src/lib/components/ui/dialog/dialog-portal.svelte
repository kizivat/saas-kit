<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { children, ...rest }: Props = $props();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = DialogPrimitive.PortalProps;
</script>

<DialogPrimitive.Portal {...rest}>
	{@render children?.()}
</DialogPrimitive.Portal>
