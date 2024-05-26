<script lang="ts">
	import EmailForm from './email-form.svelte';

	export let data;
</script>

<svelte:head>
	<title>Settings</title>
</svelte:head>

<EmailForm data={data.emailForm} />
