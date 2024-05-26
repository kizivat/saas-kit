<script lang="ts">
</script>

<div class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
	<div class="mx-auto grid w-full max-w-6xl gap-2">
		<h1 class="text-3xl font-semibold">Settings</h1>
	</div>
	<div
		class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
	>
		<nav
			class="grid gap-4 text-sm text-muted-foreground"
			data-x-chunk-name="dashboard-04-chunk-0"
			data-x-chunk-description="A sidebar navigation with links to general, security, integrations, support, organizations, and advanced settings."
			data-x-chunk-container="chunk-container after:right-0"
		>
			<a href="##"> Profile </a>
			<a href="##">Security</a>
			<a href="##">Billing</a>
		</nav>
		<div class="flex flex-1 flex-col gap-6">
			<slot />
		</div>
	</div>
</div>
