<script lang="ts">
	import { cn } from '$lib/utils.js';
</script>

<ul
	class={cn('flex flex-wrap gap-12 items-center justify-center', $$props.class)}
>
	<slot />
</ul>
