<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { setMode, userPrefersMode } from 'mode-watcher';
	import CheckIcon from 'virtual:icons/lucide/check';
	import MonitorIcon from 'virtual:icons/lucide/monitor';
	import MoonIcon from 'virtual:icons/lucide/moon';
	import SunIcon from 'virtual:icons/lucide/sun';

	type Mode = typeof userPrefersMode.current;

	interface Props {
		mode: Mode;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	}

	let { mode, ...props }: Props = $props();

	const settings: Record<
		Mode,
		{
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			icon: any;
			label: string;
		}
	> = {
		system: {
			icon: MonitorIcon,
			label: 'System',
		},
		light: {
			icon: SunIcon,
			label: 'Light',
		},
		dark: {
			icon: MoonIcon,
			label: 'Dark',
		},
	};
</script>

<Button
	variant="ghost"
	class={cn('w-full text-base', props.class)}
	onclick={() => setMode(props.mode)}
>
	{#if userPrefersMode.current === mode}
		<CheckIcon class="h-4 w-4 justify-self-end" />
	{/if}
	{@const SvelteComponent = settings[mode].icon}
	<span class="col-[2] flex flex-nowrap items-center gap-2">
		<SvelteComponent class="h-4 w-4" />
		{settings[mode].label}
	</span>
</Button>
