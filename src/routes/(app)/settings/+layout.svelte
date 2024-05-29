<script lang="ts">
	import NavLink from '../components/nav-link.svelte';
</script>

<div class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
	<div class="mx-auto grid w-full max-w-6xl gap-2">
		<h1 class="text-3xl font-semibold">Settings</h1>
	</div>
	<div
		class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
	>
		<nav class="grid gap-4 text-sm text-muted-foreground">
			<NavLink
				href="/settings/profile"
				activeClass="font-semibold text-primary"
			>
				Profile
			</NavLink>
			<NavLink
				href="/settings/security"
				activeClass="font-semibold text-primary"
			>
				Security
			</NavLink>
			<NavLink
				href="/settings/billing"
				activeClass="font-semibold text-primary"
			>
				Billing
			</NavLink>
		</nav>
		<div class="flex flex-1 flex-col gap-6">
			<slot />
		</div>
	</div>
</div>
