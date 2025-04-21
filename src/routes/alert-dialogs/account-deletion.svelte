<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';

	let { onclick } = $props();
</script>

<AlertDialog.Header>
	<AlertDialog.Title>Account deleted</AlertDialog.Title>
	<AlertDialog.Description>
		<p>
			Your account has been deleted. You've been signed out and redirected to
			the homepage.
		</p>
		<p>If you hade any active subscriptions, they have been canceled.</p>
		<p>
			If you wish to create a new account, you can do so by signing up again.
		</p>
	</AlertDialog.Description>
</AlertDialog.Header>
<AlertDialog.Footer>
	<AlertDialog.Action {onclick}>Continue</AlertDialog.Action>
</AlertDialog.Footer>
