<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';

	import { Button } from '$lib/components/ui/button';
	import { WebsiteName } from '../../../config';
</script>

<Button
	variant="ghost"
	class="flex w-fit flex-nowrap items-center gap-3 text-xl"
	href="/"
>
	<Logo />
	<span>{WebsiteName}</span>
</Button>
