<script lang="ts">
	import * as Features from '$lib/components/landing/features';
	import * as Section from '$lib/components/landing/section';
	import * as Card from '$lib/components/ui/card';
	import LineMdMoonLoop from '~icons/line-md/moon-loop';
	import LucideCreditCard from '~icons/lucide/credit-card';
	import LucideLayoutPanelTop from '~icons/lucide/layout-panel-top';
	import LucideLockKeyhole from '~icons/lucide/lock-keyhole';
	import PaletteIcon from '~icons/lucide/palette';
	import LucideSearchCheck from '~icons/lucide/search-check';
	import TabletSmartphoneIcon from '~icons/lucide/tablet-smartphone';
	const features = [
		{
			title: 'Responsive Design',
			icon: TabletSmartphoneIcon,
			description:
				'Your app will designed to work on any device, from mobile to desktop. This includes the marketing site, the app itself, and any other pages.',
		},
		{
			icon: PaletteIcon,
			title: 'Themeable + Mode Switcher',
			description:
				"You can copy-paste any of the shadcn's premade themes, or create your own tweaking a few CSS variables. Any theme can be toggled between light and dark mode.",
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
				'Icons are handled by the `unplugin-icons` Vite plugin. You can use any of the 1000+ icons from the 100+ icon sets available, and even add your own custom icons.',
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
				'The authentification system is already set up thanks to the Supabase Auth. There are login and register page as well as user settings page. You can also add social logins like Google, Facebook, and Github.',
		},
		{
			icon: LucideCreditCard,
			title: 'Payments',
			description:
				'The payments are handled by Stripe. You can create products, subscriptions, and coupons. The user can manage their payment methods and subscriptions.',
		},
	];
</script>

<Section.Root>
	<Section.Title anchor="features">Features</Section.Title>
	<Features.Root>
		{#each features as { title, icon, description }}
			<div>
				<Card.Root class="flex flex-col gap-2">
					<Card.Header>
						<Card.Title class="flex flex-nowrap gap-3">
							<svelte:component
								this={icon}
								class="h-8 w-8 fill-primary self-start flex-shrink-0"
							/>
							<Features.Term>{title}</Features.Term>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<Features.Description class="text-justify hyphens-auto">
							{description}
						</Features.Description>
					</Card.Content>
				</Card.Root>
			</div>
		{/each}
	</Features.Root>
</Section.Root>
