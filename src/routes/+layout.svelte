<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { navigating } from '$app/stores';
	import CookiesBanner from '$lib/components/landing/cookies-banner/cookies-banner.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import '../app.css';
	import MetaTags from './(marketing)/meta-tags.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<MetaTags />
<ModeWatcher />
<CookiesBanner />

{#if $navigating}
	<!-- 
	Loading animation for next page since svelte doesn't show any indicator. 
	- delay 100ms because most page loads are instant, and we don't want to flash 
	- long 12s duration because we don't actually know how long it will take
	- exponential easing so fast loads (>100ms and <1s) still see enough progress,
	while slow networks see it moving for a full 12 seconds
-->
	<div
		class="fixed left-0 right-0 top-0 z-50 h-1 w-full bg-primary"
		in:slide={{ delay: 100, duration: 12000, axis: 'x', easing: expoOut }}
	></div>
{/if}
<slot />
