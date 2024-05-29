<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
</script>

<AlertDialog.Header>
	<AlertDialog.Title>Password reset</AlertDialog.Title>
	<AlertDialog.Description>
		Your password has been reset. You've been logged out. Use your new password
		to log back in.
	</AlertDialog.Description>
</AlertDialog.Header>
<AlertDialog.Footer>
	<AlertDialog.Action on:click>Continue</AlertDialog.Action>
</AlertDialog.Footer>
