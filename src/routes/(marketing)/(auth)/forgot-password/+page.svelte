<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<h1 class="mb-6 text-2xl font-bold">Forgot Password</h1>
{#if form?.success}
	<p>Link has been sent to your email address.</p>
{:else}
	<form method="POST" class="my-4" use:enhance>
		{#if form?.error}
			<div role="alert" class="alert mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>{form.error}</span>
			</div>
		{/if}
		<label class="mb-4 flex flex-col items-start gap-2">
			<span class="text-l text-slate-800">Email</span>
			<input
				class="input input-bordered [&:user-invalid]:input-error peer w-full"
				type="email"
				name="email"
				placeholder="example@email.com"
				required
			/>
			<p class="text-error hidden text-sm [.peer:user-invalid~&]:block">
				Please enter a valid email.
			</p>
		</label>
		<button class="btn btn-primary w-full" type="submit"
			>Send reset password instructions</button
		>
	</form>
{/if}
<div class="text-l mt-4 text-slate-800">
	Remember your password? <a class="underline" href="/login">Sign in</a>.
</div>
