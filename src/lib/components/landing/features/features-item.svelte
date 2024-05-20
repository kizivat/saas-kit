<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<div class={cn('col-[1] sm:[&:nth-child(4n+3)]:col-[2]', $$props.class)}>
	<slot />
</div>
