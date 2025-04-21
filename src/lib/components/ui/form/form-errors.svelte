<script lang="ts" generics="T extends Record<string, unknown>">
	import type { SuperForm } from 'sveltekit-superforms';

	import { cn } from '$lib/utils';

	interface Props {
		form: SuperForm<T>;
		class?: string;
		[key: string]: unknown;
	}

	let { form, ...props }: Props = $props();

	let { errors } = $derived(form);
</script>

{#if $errors?._errors && $errors._errors.length > 0}
	<div class={cn('text-sm font-medium text-destructive', props.class)}>
		{#each $errors._errors as error, i (i)}
			<div class={cn('text-sm font-medium text-destructive', props.class)}>
				{error}
			</div>
		{/each}
	</div>
{/if}
