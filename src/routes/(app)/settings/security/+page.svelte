<script lang="ts">
	import { goto } from '$app/navigation';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import ChangePasswordForm from './change-password-form.svelte';
	import CreatePasswordForm from './create-password-form.svelte';

	export let data;

	export let form;
</script>

<svelte:head>
	<title>Security | Settings</title>
</svelte:head>

{#if form?.success}
	<p class="text-green-700">{form.success}</p>
{/if}
{#if data.resetOrCreate}
	<CreatePasswordForm data={data.createPasswordForm} user={data.user} />
{:else}
	<ChangePasswordForm data={data.changePasswordForm} user={data.user} />
{/if}

<AlertDialog.Root open={form?.signedOut} closeOnEscape={false}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Password reset</AlertDialog.Title>
			<AlertDialog.Description>
				Password reset successful. You have been signed out. Please sign in with your new password.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Action
				on:click={async () => {
					goto('/login');
				}}
			>
				Continue
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
