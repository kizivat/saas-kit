<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { User } from '@supabase/supabase-js';
	import { userPrefersMode } from 'mode-watcher';
	import MonitorIcon from 'virtual:icons/lucide/monitor';
	import MoonIcon from 'virtual:icons/lucide/moon';
	import SunIcon from 'virtual:icons/lucide/sun';
	import UserIcon from 'virtual:icons/lucide/user-round';

	export let user: User | null;

	let username =
		user?.user_metadata.name ||
		user?.user_metadata.full_name ||
		user?.user_metadata.preferred_username ||
		user?.user_metadata.user_name ||
		user?.email;
</script>

<div class="hidden sm:block">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button
				variant="default"
				size="icon"
				class="rounded-full"
				builders={[builder]}
			>
				<span class="sr-only">Personal</span>
				<Avatar.Root>
					<Avatar.Image src={user?.user_metadata.avatar_url} alt={username} />
					<Avatar.Fallback class="bg-primary">
						<UserIcon />
					</Avatar.Fallback>
				</Avatar.Root>
			</Button>
		</DropdownMenu.Trigger>

		<DropdownMenu.Content align="end">
			{#if !user}
				<DropdownMenu.Item href="/login">Login</DropdownMenu.Item>
				<DropdownMenu.Item href="/register">Register</DropdownMenu.Item>
			{:else}
				<DropdownMenu.Label>
					Welcome back,<br /><strong>{username}</strong>
				</DropdownMenu.Label>
			{/if}

			<DropdownMenu.Separator />
			<DropdownMenu.Label>Switch theme</DropdownMenu.Label>
			<DropdownMenu.RadioGroup bind:value={$userPrefersMode}>
				<DropdownMenu.RadioItem value="system">
					<MonitorIcon class="me-2 h-4 w-4" />
					System
				</DropdownMenu.RadioItem>
				<DropdownMenu.RadioItem value="light">
					<SunIcon class="me-2 h-4 w-4" />
					Light
				</DropdownMenu.RadioItem>
				<DropdownMenu.RadioItem value="dark">
					<MoonIcon class="me-2 h-4 w-4" />
					Dark
				</DropdownMenu.RadioItem>
			</DropdownMenu.RadioGroup>
			{#if user}
				<DropdownMenu.Separator />
				<DropdownMenu.Item href="/settings">Settings</DropdownMenu.Item>
				<DropdownMenu.Item href="/log-out">Log out</DropdownMenu.Item>
			{/if}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>

<div class="block sm:hidden">
	<ul class="">
		{#if !user}
			<li>
				<Button href="/register" variant="ghost" class="w-full py-6 text-base">
					Register
				</Button>
			</li>
			<li>
				<Button href="/log-in" variant="ghost" class="w-full py-6 text-base">
					Log in
				</Button>
			</li>
		{:else}
			<li>
				<Button href="/settings" variant="ghost" class="w-full py-6 text-base">
					Settings
				</Button>
			</li>
			<li>
				<Button href="/log-out" variant="ghost" class="w-full py-6 text-base">
					Log out
				</Button>
			</li>
		{/if}
	</ul>
</div>
