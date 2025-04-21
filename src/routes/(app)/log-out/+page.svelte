<script lang="ts">
	import { goto } from '$app/navigation';

	let { data } = $props();

	let { supabase } = data;
	let message = $state('Signing out....');

	supabase.auth.signOut().then(({ error }) => {
		if (error) {
			message = 'There was an issue signing out.';
		} else {
			goto('/login');
		}
	});
</script>

<h1 class="m-6 text-2xl font-bold">{message}</h1>
