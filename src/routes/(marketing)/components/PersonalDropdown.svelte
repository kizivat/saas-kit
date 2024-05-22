<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { userPrefersMode } from 'mode-watcher';
	import MonitorIcon from 'virtual:icons/lucide/monitor';
	import MoonIcon from 'virtual:icons/lucide/moon';
	import SunIcon from 'virtual:icons/lucide/sun';
	import UserIcon from 'virtual:icons/lucide/user-round';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			variant="ghost"
			size="icon"
			class="rounded-full"
			builders={[builder]}
		>
			<span class="sr-only">Personal</span>
			<Avatar.Root class="border-2 border-primary p-0.5">
				<Avatar.Fallback>
					<UserIcon />
				</Avatar.Fallback>
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>

	<DropdownMenu.Content align="end">
		<DropdownMenu.Item href="/login">Login</DropdownMenu.Item>
		<DropdownMenu.Item href="/register">Register</DropdownMenu.Item>

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
	</DropdownMenu.Content>
</DropdownMenu.Root>
