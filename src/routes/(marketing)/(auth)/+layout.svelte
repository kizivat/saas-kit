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

<div class="mx-auto flex max-w-screen-lg flex-col items-center">
	<div>
		<slot />
	</div>
	<div class="mt-8 {isEurope ? 'block' : 'hidden'}">
		🍪 Logging in uses Cookies 🍪
	</div>
</div>
