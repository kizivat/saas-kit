<script>
	import { onNavigate } from '$app/navigation';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';
	import ChevronsUpDown from 'virtual:icons/lucide/chevrons-up-down';
	import MenuIcon from 'virtual:icons/lucide/menu';
	import XIcon from 'virtual:icons/lucide/x';
	import '../../app.css';
	import HomeButton from './components/HomeButton.svelte';
	import PersonalDropdown from './components/PersonalDropdown.svelte';
	import ThemeSwitchButton from './components/ThemeSwitchButton.svelte';

	const menuItems = {
		'/': 'Home',
		// '/#features': 'Features',
		'/pricing': 'Pricing',
		'/contact': 'Contact',
	};

	let menuOpen = false;
	onNavigate(_ => {
		menuOpen = false;
	});
</script>

<header class="sticky top-0 z-10 border-b border-border bg-card py-4">
	<div
		class="grid grid-cols-2 sm:grid-cols-3 flex-nowrap justify-between items-center container"
	>
		<HomeButton />
		<nav class="hidden sm:block mx-auto">
			<ul class="px-1 hidden sm:flex font-bold text-lg">
				{#each Object.entries(menuItems) as [href, text]}
					<li class="md:mx-2">
						<Button variant="ghost" {href} class="text-base text-foreground">
							{text}
						</Button>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="hidden sm:block justify-self-end">
			<!-- <Button variant="secondary" href="/account">Get started</Button> -->
			<PersonalDropdown />
		</div>

		<div class="sm:hidden justify-self-end">
			<Drawer.Root bind:open={menuOpen}>
				<Drawer.Trigger asChild let:builder>
					<Button variant="ghost" size="icon" builders={[builder]}>
						<span class="sr-only">Menu</span>
						<MenuIcon />
					</Button>
				</Drawer.Trigger>
				<Drawer.Content>
					<Drawer.Header class="py-0 flex justify-end">
						<Drawer.Close asChild let:builder>
							<Button variant="ghost" size="icon" builders={[builder]}>
								<span class="sr-only">Close</span>
								<XIcon />
							</Button>
						</Drawer.Close>
					</Drawer.Header>
					<Collapsible.Root>
						<Collapsible.Trigger asChild let:builder>
							<div class="p-2">
								<Button
									variant="ghost"
									class="w-full text-base flex gap-2 flex-nowrap"
									builders={[builder]}
								>
									Switch theme
									<ChevronsUpDown class="size-4" />
								</Button>
							</div>
						</Collapsible.Trigger>
						<Collapsible.Content>
							<ul
								class="grid grid-cols-[auto,auto] items-center p-2 pt-0 gap-x-2"
							>
								<li class="col-span-2 grid grid-cols-subgrid">
									<ThemeSwitchButton
										mode="system"
										class="col-span-2 grid grid-cols-subgrid"
									/>
								</li>
								<li class="col-span-2 grid grid-cols-subgrid">
									<ThemeSwitchButton
										mode="light"
										class="col-span-2 grid grid-cols-subgrid"
									/>
								</li>
								<li class="col-span-2 grid grid-cols-subgrid">
									<ThemeSwitchButton
										mode="dark"
										class="col-span-2 grid grid-cols-subgrid"
									/>
								</li>
							</ul>
						</Collapsible.Content>
					</Collapsible.Root>
					<Separator />
					<nav class="[&_ul]:p-2 [&_ul]:flex [&_ul]:flex-col">
						<ul>
							{#each Object.entries(menuItems) as [href, text]}
								<li>
									<Button {href} variant="ghost" class="py-6 w-full text-base">
										{text}
									</Button>
								</li>
							{/each}
						</ul>
						<Separator />
						<ul class="">
							<li>
								<Button
									href="/account"
									variant="ghost"
									class="py-6 w-full text-base"
								>
									Register
								</Button>
							</li>
							<li>
								<Button
									href="/account"
									variant="ghost"
									class="py-6 w-full text-base"
								>
									Log in
								</Button>
							</li>
						</ul>
					</nav>
				</Drawer.Content>
			</Drawer.Root>
		</div>
	</div>
</header>

<main class="container py-8">
	<slot />
</main>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<footer class="border-t border-border bg-card py-6">
	<div class="container flex flex-col gap-12">
		<div class="flex flex-col sm:flex-row flex-wrap gap-12">
			<div class="flex-[0.3]">
				<HomeButton />
			</div>
			<div
				class={cn(
					'flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 p-4',
					'[&_.col]:flex [&_.col]:flex-col [&_.col]:gap-3',
					'[&_.footer-title]:text-lg [&_.footer-title]:text-primary [&_.footer-title]:font-semibold',
					'[&_nav]:flex [&_nav]:flex-col [&_nav]:gap-3 [&_nav]:text-muted-foreground',
				)}
			>
				<div class="col">
					<span class="footer-title">Menu</span>
					<nav>
						{#each Object.entries(menuItems) as [href, text]}
							<Button
								{href}
								variant="link"
								class="text-start text-base text-muted-foreground p-0 h-auto block font-normal"
							>
								{text}
							</Button>
						{/each}
					</nav>
				</div>
				<div class="col">
					<span class="footer-title">App</span>
					<nav>
						<Button
							href="/login"
							variant="link"
							class="text-start text-base text-muted-foreground p-0 h-auto block font-normal"
						>
							Login
						</Button>
						<Button
							href="/register"
							variant="link"
							class="text-start text-base text-muted-foreground p-0 h-auto block font-normal"
						>
							Register
						</Button>
					</nav>
				</div>
				<div class="col">
					<span class="footer-title">Links</span>
					<nav>
						<Button
							variant="link"
							class="text-start text-base text-muted-foreground p-0 h-auto block font-normal"
							href="https://kizivat.eu"
							target="_blank"
						>
							David Kizivat
						</Button>
						<Button
							variant="link"
							class="text-start text-base text-muted-foreground p-0 h-auto block font-normal"
							href="https://twitter.com/kizivat"
							target="_blank"
						>
							@kizivat at 𝕏
						</Button>
						<Button
							variant="link"
							class="text-start text-base text-muted-foreground p-0 h-auto block font-normal"
							href="https://github.com/kizivat"
							target="_blank"
						>
							GitHub
						</Button>
						<Button
							variant="link"
							class="text-start text-base text-muted-foreground p-0 h-auto block font-normal"
							href="https://www.linkedin.com/in/david-kizivat/"
							target="_blank"
						>
							LinkedIn
						</Button>
					</nav>
				</div>
			</div>
		</div>
		<p class="max-w-prose text-center leading-6 place-self-center text-sm">
			&copy; {new Date().getFullYear()}
			SaaS Kit created by <Button
				variant="link"
				href="https://kizivat.eu"
				target="_blank"
				class="p-0 h-auto text-primary underline hover:no-underline"
				>David Kizivat</Button
			>. Based on <Button
				variant="link"
				class="p-0 h-auto text-primary underline hover:no-underline"
				href="https://github.com/CriticalMoments/CMSaasStarter"
				target="_blank">CriticalMoments/CMSaasStarter</Button
			>. Landing page design inspired by Leo Miranda's <Button
				variant="link"
				class="p-0 h-auto text-primary underline hover:no-underline"
				href="https://shadcn-landing-page.vercel.app/"
				target="_blank">Shadcn Landing Page</Button
			>.
		</p>
	</div>
</footer>
