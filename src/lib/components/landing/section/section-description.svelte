<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<p
	class={cn(
		'mx-auto max-w-prose text-center text-sm text-muted-foreground sm:text-base',
		$$props.class,
	)}
>
	<slot />
</p>
