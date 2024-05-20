<script lang="ts">
	import { cn } from '$lib/utils.js';
</script>

<ul
	class={cn('flex flex-wrap items-center justify-center gap-12', $$props.class)}
>
	<slot />
</ul>
