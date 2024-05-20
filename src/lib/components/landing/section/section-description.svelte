<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<p
	class={cn(
		'text-muted-foreground text-sm sm:text-base text-center max-w-prose mx-auto',
		$$props.class,
	)}
>
	<slot />
</p>
