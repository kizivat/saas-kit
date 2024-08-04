<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import LucideCookie from '~icons/lucide/cookie';

	let show = false;

	let isEurope = false;
	try {
		isEurope = Intl.DateTimeFormat()
			.resolvedOptions()
			.timeZone.startsWith('Europe/');
	} catch (e) {
		console.error(e);
	}

	onMount(() => {
		if (isEurope && sessionStorage.getItem('cookies-accepted') !== 'true') {
			show = true;
		}
	});

	function handleAccept() {
		show = false;
		sessionStorage.setItem('cookies-accepted', 'true');
	}
</script>

{#if show}
	<div
		class="fixed bottom-4 right-4 z-50 ml-4 mt-4"
		transition:fly={{ y: 20, x: 20, duration: 300 }}
	>
		<Card.Root class="bg-card">
			<Card.Content class="flex flex-row flex-nowrap items-start gap-4 p-6">
				<LucideCookie class="h-12 w-12 text-muted-foreground" />
				<div class="flex flex-col gap-4">
					<div class="flex max-w-[52ch] flex-col gap-2">
						<p>
							We use cookies to enable essential functionality on our website.
							Namely, to remember your cookie preferences and to provide log in
							functionality.
						</p>
						<p>
							Do check our <a href="/privacy-policy" class="underline"
								>Privacy Policy</a
							> for more information.
						</p>
					</div>
					<div class="flex justify-end gap-3">
						<Button variant="outline" on:click={handleAccept}>OK</Button>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
{/if}
