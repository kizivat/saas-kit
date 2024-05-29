<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
</script>

<AlertDialog.Header>
	<AlertDialog.Title>Account deleted</AlertDialog.Title>
	<AlertDialog.Description>
		Your account has been deleted. You've been signed out and redirected to the
		homepage.
	</AlertDialog.Description>
</AlertDialog.Header>
<AlertDialog.Footer>
	<AlertDialog.Action on:click>Continue</AlertDialog.Action>
</AlertDialog.Footer>
