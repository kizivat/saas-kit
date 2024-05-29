<script lang="ts">
	import ChangePasswordForm from './change-password-form.svelte';
	import CreatePasswordForm from './create-password-form.svelte';

	export let data;

	export let form;
</script>

<svelte:head>
	<title>Security | Settings</title>
</svelte:head>

<h2 class="text-xl font-semibold">Security</h2>

{#if form?.success}
	<p class="text-green-700">{form.success}</p>
{/if}
{#if data.createPassword || data.recoverySession}
	<CreatePasswordForm
		data={data.createPasswordForm}
		user={data.user}
		recoverySession={data.recoverySession}
	/>
{:else}
	<ChangePasswordForm data={data.changePasswordForm} user={data.user} />
{/if}
