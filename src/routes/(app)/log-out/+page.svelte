<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;

	let { supabase } = data;
	let message = 'Signing out....';

	supabase.auth.signOut().then(({ error }) => {
		if (error) {
			message = 'There was an issue signing out.';
		} else {
			goto('/login');
		}
	});
</script>

<h1 class="m-6 text-2xl font-bold">{message}</h1>
