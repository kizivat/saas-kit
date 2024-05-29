<script lang="ts">
	import { goto } from '$app/navigation';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import Trash from '~icons/lucide/trash-2';
	import DeleteAccountForm from './delete-account-form.svelte';
	import EmailForm from './email-form.svelte';
	import InfoForm from './info-form.svelte';

	export let data;
	export let form;
</script>

<svelte:head>
	<title>Profile | Settings</title>
</svelte:head>

<EmailForm data={data.emailForm} user={data.user} />
<InfoForm data={data.infoForm} />

<Card.Root class="border-destructive bg-destructive/5 text-destructive">
	<Card.Header>
		<Card.Title>Delete Account</Card.Title>
		<Card.Description class="text-destructive">
			Permanently delete your account. This action is irreversible.
		</Card.Description>
	</Card.Header>
	<Card.Content>
		{#if data.deleteAccountForm}
			<Dialog.Root>
				<Dialog.Trigger asChild let:builder>
					<Button
						variant="destructive"
						class="flex flex-nowrap items-center gap-2"
						builders={[builder]}
					>
						<Trash class="h-4 w-4" />
						Delete Account
					</Button>
				</Dialog.Trigger>
				<Dialog.Content class="border-destructive">
					<Dialog.Header>
						<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
						<Dialog.Description>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</Dialog.Description>
					</Dialog.Header>

					<DeleteAccountForm data={data.deleteAccountForm} />
				</Dialog.Content>
			</Dialog.Root>
		{:else}
			<p>
				To be able to delete your account, you have to have a password set up.
				You can setup your password in the <a
					href="/settings/security"
					class="underline">security settings</a
				>.
			</p>
		{/if}
	</Card.Content>
</Card.Root>

<AlertDialog.Root open={form?.deleted} closeOnEscape={false}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Account deleted</AlertDialog.Title>
			<AlertDialog.Description>
				Your account has been successfully deleted. You will now be redirected
				to the homepage.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Action
				on:click={async () => {
					goto('/register');
				}}
			>
				Continue
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
