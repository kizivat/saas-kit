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

	interface Props {
		user: User | null;
	}

	let { user }: Props = $props();

	let username =
		user?.user_metadata.name ||
		user?.user_metadata.full_name ||
		user?.user_metadata.preferred_username ||
		user?.user_metadata.user_name ||
		user?.email;
</script>

<div>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button variant="secondary" size="icon" class="rounded-full" {...props}>
					<span class="sr-only">Personal</span>
					<Avatar.Root>
						<Avatar.Image src={user?.user_metadata.avatar_url} alt={username} />
						<Avatar.Fallback>
							<UserIcon />
						</Avatar.Fallback>
					</Avatar.Root>
				</Button>
			{/snippet}
		</DropdownMenu.Trigger>

		<DropdownMenu.Content align="end">
			{#if !user}
				<DropdownMenu.Item
					>{#snippet child({ props })}<a href="/login" {...props}>Login</a
						>{/snippet}</DropdownMenu.Item
				>
				<DropdownMenu.Item
					>{#snippet child({ props })}<a href="/register" {...props}>Register</a
						>{/snippet}</DropdownMenu.Item
				>
			{:else}
				<DropdownMenu.Label>
					Welcome back,<br /><strong>{username}</strong>
				</DropdownMenu.Label>
			{/if}

			<DropdownMenu.Separator />
			<DropdownMenu.Label>Switch theme</DropdownMenu.Label>
			<DropdownMenu.RadioGroup bind:value={userPrefersMode.current}>
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
				<DropdownMenu.Item
					>{#snippet child({ props })}<a href="/settings" {...props}>Settings</a
						>{/snippet}</DropdownMenu.Item
				>
				<DropdownMenu.Item
					>{#snippet child({ props })}<a href="/log-out" {...props}>Log out</a
						>{/snippet}</DropdownMenu.Item
				>
			{/if}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>
