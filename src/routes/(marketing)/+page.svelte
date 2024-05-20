<script lang="ts">
	import * as LogosCloud from '$lib/components/landing/logos-cloud';
	import * as Section from '$lib/components/landing/section';
	import * as Testimonials from '$lib/components/landing/testimonials';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import PostgresLogo from '~icons/devicon-plain/postgresql';
	import UserIcon from '~icons/lucide/user';
	import ShadcnLogo from '~icons/simple-icons/shadcnui';
	import StripeLogo from '~icons/simple-icons/stripe';
	import SupabaseLogo from '~icons/simple-icons/supabase';
	import SvelteLogo from '~icons/simple-icons/svelte';
	import TailwindLogo from '~icons/simple-icons/tailwindcss';
	import { WebsiteName } from './../../config';
	import Features from './components/sections/Features.svelte';
	import HeroSection from './components/sections/HeroSection.svelte';
</script>

<svelte:head>
	<title>{WebsiteName}</title>
	<meta name="description" content="{WebsiteName} Home Page" />
</svelte:head>

<div class="flex flex-col gap-20">
	<Section.Root>
		<HeroSection />
	</Section.Root>
	<Section.Root>
		<Features />
	</Section.Root>
	<Section.Root>
		<Section.Title>Testimonials</Section.Title>
		<Testimonials.Root>
			<Testimonials.Figure>
				<Card.Root>
					<Testimonials.Author>
						<Card.Header class="flex flex-row items-center gap-4">
							<Avatar.Root>
								<Avatar.Fallback>
									<UserIcon />
								</Avatar.Fallback>
							</Avatar.Root>
							<div>
								<Card.Title>David Kizivat</Card.Title>
								<Card.Description>@kizivat</Card.Description>
							</div>
						</Card.Header>
					</Testimonials.Author>
					<Card.Content>
						<Testimonials.Quote>
							We had this once said about us.
						</Testimonials.Quote>
					</Card.Content>
				</Card.Root>
			</Testimonials.Figure>
			<Testimonials.Figure>
				<Card.Root>
					<Testimonials.Author>
						<Card.Header class="flex flex-row items-center gap-4">
							<Avatar.Root>
								<Avatar.Fallback>
									<UserIcon />
								</Avatar.Fallback>
							</Avatar.Root>
							<div>
								<Card.Title>David Kizivat</Card.Title>
								<Card.Description>@kizivat</Card.Description>
							</div>
						</Card.Header>
					</Testimonials.Author>
					<Card.Content>
						<Testimonials.Quote>
							As one of the first users, I can say that this is a great. I love
							it. My team loves it. We are going to use this.
						</Testimonials.Quote>
					</Card.Content>
				</Card.Root>
			</Testimonials.Figure>
			<Testimonials.Figure>
				<Card.Root>
					<Testimonials.Author>
						<Card.Header class="flex flex-row items-center gap-4">
							<Avatar.Root>
								<Avatar.Fallback>
									<UserIcon />
								</Avatar.Fallback>
							</Avatar.Root>
							<div>
								<Card.Title>David Kizivat</Card.Title>
								<Card.Description>@kizivat</Card.Description>
							</div>
						</Card.Header>
					</Testimonials.Author>
					<Card.Content>
						<Testimonials.Quote>
							No way this is free. It is too good to be free. I would pay for
							this at least $100. It is that good. I'm going to use this for my
							next project. Thank you so much for making this. I'm looking for a
							way to pay you back.
						</Testimonials.Quote>
					</Card.Content>
				</Card.Root>
			</Testimonials.Figure>
			<Testimonials.Figure>
				<Card.Root>
					<Testimonials.Author>
						<Card.Header class="flex flex-row items-center gap-4">
							<Avatar.Root>
								<Avatar.Fallback>
									<UserIcon />
								</Avatar.Fallback>
							</Avatar.Root>
							<div>
								<Card.Title>David Kizivat</Card.Title>
								<Card.Description>@kizivat</Card.Description>
							</div>
						</Card.Header>
					</Testimonials.Author>
					<Card.Content>
						<Testimonials.Quote>
							Would totally use this again. It is very nice. Nice job! Keep it
							up! 🚀
						</Testimonials.Quote>
					</Card.Content>
				</Card.Root>
			</Testimonials.Figure>
			<Testimonials.Figure>
				<Card.Root>
					<Testimonials.Author>
						<Card.Header class="flex flex-row items-center gap-4">
							<Avatar.Root>
								<Avatar.Fallback>
									<UserIcon />
								</Avatar.Fallback>
							</Avatar.Root>
							<div>
								<Card.Title>David Kizivat</Card.Title>
								<Card.Description>@kizivat</Card.Description>
							</div>
						</Card.Header>
					</Testimonials.Author>
					<Card.Content>
						<Testimonials.Quote>
							Great job! I love it! I would recommend this to anyone.
						</Testimonials.Quote>
					</Card.Content>
				</Card.Root>
			</Testimonials.Figure>
		</Testimonials.Root>
	</Section.Root>
	<Section.Root>
		<Section.Title>Logos Cloud</Section.Title>
		<LogosCloud.Root class="justify-around">
			<LogosCloud.Logo>
				<SvelteLogo />
			</LogosCloud.Logo>
			<LogosCloud.Logo>
				<SupabaseLogo />
			</LogosCloud.Logo>
			<LogosCloud.Logo>
				<ShadcnLogo />
			</LogosCloud.Logo>
			<LogosCloud.Logo>
				<TailwindLogo />
			</LogosCloud.Logo>
			<LogosCloud.Logo>
				<StripeLogo />
			</LogosCloud.Logo>
			<LogosCloud.Logo>
				<PostgresLogo />
			</LogosCloud.Logo>
		</LogosCloud.Root>
	</Section.Root>
</div>
