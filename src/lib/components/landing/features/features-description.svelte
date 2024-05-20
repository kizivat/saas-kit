<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<dd class={cn('text-muted-foreground', $$props.class)}>
	<p class="max-w-prose"><slot /></p>
</dd>
