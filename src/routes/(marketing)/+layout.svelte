<script>
	import { onNavigate } from '$app/navigation';
	import Logo from '$lib/components/Logo.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Separator } from '$lib/components/ui/separator';
	import { twMerge } from 'tailwind-merge';
	import MenuIcon from 'virtual:icons/lucide/menu';
	import XIcon from 'virtual:icons/lucide/x';
	import '../../app.css';

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
		<div>
			<Button
				variant="ghost"
				class="text-xl w-fit flex flex-nowrap gap-2 items-center"
				href="/"
			>
				<Logo />

				SaaS Kit
			</Button>
		</div>
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
			<Button variant="secondary" href="/account">Get started</Button>
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

<div class="container">
	<slot />
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<footer class="border-t border-border bg-card py-6">
	<div class="container flex flex-col gap-12">
		<div class="flex flex-col sm:flex-row flex-wrap gap-12">
			<div class="flex-[0.3]">
				<a class="text-xl flex flex-nowrap gap-2 items-center" href="/">
					<Logo />
					SaaS Kit
				</a>
			</div>
			<div
				class={twMerge(
					'flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8',
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
		<div class="text-center text-sm flex flex-col gap-1">
			<p>
				&copy; {new Date().getFullYear()}
				<span class="font-mono">saas-starter</span>
				created by <Button
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
				>.
			</p>
		</div>
	</div>
</footer>
