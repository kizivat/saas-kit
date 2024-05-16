<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Sign Up</h1>
<form method="POST" use:enhance>
	{#if form?.error}
		<div role="alert" class="alert mb-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current shrink-0 h-6 w-6"
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
	<label class="flex flex-col gap-2 items-start mb-4">
		<span class="text-l text-slate-800">Email</span>
		<input
			class="peer input input-bordered w-full [&:user-invalid]:input-error"
			type="email"
			name="email"
			placeholder="example@email.com"
			required
		/>
		<p class="hidden [.peer:user-invalid~&]:block text-error text-sm">
			Please enter a valid email.
		</p>
	</label>
	<label class="flex flex-col gap-2 items-start mb-4">
		<span class="text-l text-slate-800">Password</span>
		<input
			class="peer input input-bordered w-full [&:user-invalid]:input-error"
			type="password"
			name="password"
			placeholder="••••••••"
			required
		/>
		<p class="hidden [.peer:user-invalid~&]:block text-error text-sm">
			Please enter a valid password.
		</p>
	</label>
	<button class="btn btn-primary w-full" type="submit">Sign up</button>
</form>
<div class="text-l text-slate-800 mt-4 mb-2">
	Have an account? <a class="underline" href="/login">Sign in</a>.
</div>
