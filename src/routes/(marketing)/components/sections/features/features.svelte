<script lang="ts">
	import * as Features from '$lib/components/landing/features';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { cn } from '$lib/utils';
	import LucideChevronDown from 'virtual:icons/lucide/chevron-down';
	import LineMdMoonLoop from '~icons/line-md/moon-loop';
	import LucideCreditCard from '~icons/lucide/credit-card';
	import LucideLayoutPanelTop from '~icons/lucide/layout-panel-top';
	import LucideLockKeyhole from '~icons/lucide/lock-keyhole';
	import PaletteIcon from '~icons/lucide/palette';
	import LucideSearchCheck from '~icons/lucide/search-check';
	import TabletSmartphoneIcon from '~icons/lucide/tablet-smartphone';
	import Themes from './showcases/Themes.svelte';
	const features = [
		{
			icon: PaletteIcon,
			title: 'Themeable + Mode Switcher',
			description:
				"You can copy-paste any of the shadcn's premade themes, or create your own tweaking a few CSS variables. Any theme can be toggled between light and dark mode.",
			showcase: Themes,
		},
		{
			title: 'Responsive Design',
			icon: TabletSmartphoneIcon,
			description:
				'Your app will designed to work on any device, from mobile to desktop. This includes the marketing site, the app itself, and any other pages.',
		},
		{
			icon: LucideLayoutPanelTop,
			title: 'Customizable Landing Page',
			description:
				"The landing page is fully customizable. You'll have access to many premade components inspired by the `shadcn-svelte` system to mix and match to your liking.",
		},
		{
			icon: LineMdMoonLoop,
			title: 'Unplugin Icons',
			description:
				'Icons are handled by the `unplugin-icons` Vite plugin. You can use any of the 1000+ icons from the 100+ icon sets available, and even add your own custom icons. There are also animated ones!',
		},
		{
			icon: LucideSearchCheck,
			title: 'SEO Friendly',
			description:
				'Your app will be optimized for search engines, with proper meta tags, sitemap, and other SEO best practices.',
		},
		{
			icon: LucideLockKeyhole,
			title: 'Auth',
			description:
				"The authentification system is already set up thanks to the Supabase Auth. There are login and register page as well as user settings page. You can also add social logins like Google, Facebook, and Github. We've also implemented advanced features like email verification, password reset, account deletion.",
		},
		{
			icon: LucideCreditCard,
			title: 'Payments',
			description:
				'The payments are handled by Stripe. You can create products and subscriptions. The user can manage their payment methods and subscriptions. The subscription downgrades and upgrades are also properly handled.',
		},
	];

	const SHOW_BASE = 2;

	let expanded: boolean = false;
</script>

<Collapsible.Root class="mx-auto max-w-screen-lg" bind:open={expanded}>
	<Features.Root>
		{#each [...features].splice(0, SHOW_BASE) as { title, icon, description, showcase }}
			<Features.FeatureItem
				class="mb-4 flex min-h-80 flex-nowrap items-start gap-4"
			>
				<svelte:component
					this={icon}
					class="size-10 flex-shrink-0 fill-primary"
				/>
				<div>
					<Features.Term class="mb-3 leading-none">
						<span>{title}</span>
					</Features.Term>
					<Features.Description class="hyphens-auto text-justify">
						{description}
					</Features.Description>
				</div>
			</Features.FeatureItem>
			<Features.FeatureShowcase
				class="flex flex-col items-center justify-start"
			>
				{#if showcase}
					<svelte:component this={showcase} />
				{:else}
					<div
						class="h-full min-h-80 w-full rounded-lg bg-black opacity-5 dark:bg-white"
					></div>
				{/if}
			</Features.FeatureShowcase>
		{/each}
	</Features.Root>
	<div class="flex items-center p-10">
		<Collapsible.Trigger asChild let:builder>
			<Button
				class="mx-auto place-self-center text-center"
				variant="link"
				builders={[builder]}
			>
				Show {#if expanded}less{:else}more{/if} features
				<LucideChevronDown
					class={cn(
						'ms-2 size-4 transition-transform',
						expanded && '-rotate-180',
					)}
				/>
			</Button>
		</Collapsible.Trigger>
	</div>
	<Collapsible.Content>
		<Features.Root>
			{#each [...features].splice(SHOW_BASE) as { title, icon, description }}
				<Features.FeatureItem>
					<div class="mb-4 flex flex-nowrap items-start gap-4">
						<svelte:component
							this={icon}
							class="h-8 w-8 flex-shrink-0 fill-primary"
						/>
						<Features.Term>{title}</Features.Term>
					</div>
					<Features.Description class="hyphens-auto text-justify">
						{description}
					</Features.Description>
				</Features.FeatureItem>
				<Features.FeatureShowcase>
					<div
						class="h-full min-h-80 w-full rounded-lg bg-white opacity-5"
					></div>
				</Features.FeatureShowcase>
			{/each}
		</Features.Root>
	</Collapsible.Content>
</Collapsible.Root>
