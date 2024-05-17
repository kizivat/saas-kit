<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';

	import { Button } from '$lib/components/ui/button';
</script>

<Button
	variant="ghost"
	class="text-xl w-fit flex flex-nowrap gap-3 items-center"
	href="/"
>
	<Logo />
	<span>SaaS Kit</span>
</Button>
