<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { AuthChangeEvent } from '@supabase/supabase-js';
	import { onMount } from 'svelte';

	export let data;
	export let form;

	let { supabase } = data;

	onMount(() => {
		supabase.auth.onAuthStateChange((event: AuthChangeEvent) => {
			// Redirect to account after sucessful login
			if (event == 'SIGNED_IN') {
				// Delay needed because order of callback not guaranteed.
				// Give the layout callback priority to update state or
				// we'll just bounch back to login when /account tries to load
				setTimeout(() => {
					goto('/account');
				}, 1);
			}
		});
	});
</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

{#if $page.url.searchParams.get('verified') == 'true'}
	<div role="alert" class="alert alert-success mb-5">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span>Email verified! Please sign in.</span>
	</div>
{/if}
<h1 class="mb-6 text-2xl font-bold">Sign In</h1>
<form method="POST" use:enhance>
	{#if form?.error}
		<div role="alert" class="alert text-error mb-4">
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
	<button class="btn btn-primary w-full" type="submit">Sign in</button>
</form>
<div class="text-l mt-4 text-slate-800">
	<a class="underline" href="/forgot-password">Forgot password?</a>
</div>
<div class="text-l mt-3 text-slate-800">
	Don't have an account? <a class="underline" href="/register">Sign up</a>.
</div>
