<script lang="ts">
	import { page } from '$app/stores';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';

	let parts = $derived(
		$page.url.pathname
			.split('/')
			.filter(Boolean)
			.filter((part) => part !== 'dashboard'),
	);
</script>

<Breadcrumb.Root class="hidden md:flex">
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/sdashboard">Dashboard</Breadcrumb.Link>
		</Breadcrumb.Item>
		{#each parts as part, i (i)}
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/{parts.slice(0, i + 1).join('/')}">
					{part.charAt(0).toUpperCase() + part.slice(1)}
				</Breadcrumb.Link>
			</Breadcrumb.Item>
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>
