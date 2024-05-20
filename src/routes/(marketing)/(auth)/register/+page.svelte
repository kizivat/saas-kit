<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<h1 class="mb-6 text-2xl font-bold">Sign Up</h1>
<form method="POST" use:enhance>
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
	<label class="mb-4 flex flex-col items-start gap-2">
		<span class="text-l text-slate-800">Password</span>
		<input
			class="input input-bordered [&:user-invalid]:input-error peer w-full"
			type="password"
			name="password"
			placeholder="••••••••"
			required
		/>
		<p class="text-error hidden text-sm [.peer:user-invalid~&]:block">
			Please enter a valid password.
		</p>
	</label>
	<button class="btn btn-primary w-full" type="submit">Sign up</button>
</form>
<div class="text-l mb-2 mt-4 text-slate-800">
	Have an account? <a class="underline" href="/login">Sign in</a>.
</div>
