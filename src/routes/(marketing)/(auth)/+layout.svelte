<script lang="ts">
	let isEurope = false;
	try {
		isEurope = Intl.DateTimeFormat()
			.resolvedOptions()
			.timeZone.startsWith('Europe/');
	} catch (e) {
		/* continue */
	}
</script>

<div
	class="mx-auto flex min-h-[70vh] max-w-lg place-content-center content-center items-center pb-12 text-center"
>
	<div class="flex w-64 flex-col lg:w-80">
		<slot />
		<div class="mt-8 {isEurope ? 'block' : 'hidden'}">
			🍪 Logging in uses Cookies 🍪
		</div>
	</div>
</div>
