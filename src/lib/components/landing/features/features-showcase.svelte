<script lang="ts">
	import { cn } from '$lib/utils';
</script>

<div class={cn('sm:col-[2] [&:nth-child(4n)]:col-[1]', $$props.class)}>
	<slot />
</div>
