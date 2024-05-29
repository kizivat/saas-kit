import type { Button as ButtonPrimitive } from 'bits-ui';
import { tv, type VariantProps } from 'tailwind-variants';
import Root from './button.svelte';

const buttonVariants = tv({
	base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground enabled:hover:bg-primary/90',
			destructive:
				'bg-destructive text-destructive-foreground enabled:hover:bg-destructive/90 focus-visible:ring-destructive',
			outline:
				'border border-input bg-background enabled:hover:bg-accent enabled:hover:text-accent-foreground',
			secondary:
				'bg-secondary text-secondary-foreground enabled:hover:bg-secondary/80',
			ghost: 'enabled:hover:bg-accent enabled:hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 enabled:hover:underline',
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	//
	Root as Button,
	Root,
	buttonVariants,
	type Events as ButtonEvents,
	type Props as ButtonProps,
	type Events,
	type Props,
};
