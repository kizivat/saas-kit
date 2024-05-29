import { tv, type VariantProps } from 'tailwind-variants';

import Description from './alert-description.svelte';
import Title from './alert-title.svelte';
import Root from './alert.svelte';

export const alertVariants = tv({
	base: 'relative w-full rounded-lg border p-4 [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',

	variants: {
		variant: {
			default: 'bg-background text-foreground',
			destructive:
				'border-destructive/50 text-destructive text-destructive dark:border-destructive [&>svg]:text-destructive',
			warning:
				'border-yellow-500/50 text-yellow-600 dark:border-yellow-600 [&>svg]:text-yellow-600',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

export type Variant = VariantProps<typeof alertVariants>['variant'];
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export {
	//
	Root as Alert,
	Description as AlertDescription,
	Title as AlertTitle,
	Description,
	Root,
	Title,
};
