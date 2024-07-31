<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import Trash from '~icons/lucide/trash-2';
	import DeleteAccountForm from './delete-account-form.svelte';
	import EmailForm from './email-form.svelte';
	import InfoForm from './info-form.svelte';

	export let data;
</script>

<svelte:head>
	<title>Profile | Settings</title>
</svelte:head>

<h2 class="text-xl font-semibold">Profile</h2>

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
							account and remove your data from our servers. Any of your active
							subscriptions will be cancelled automatically.
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
