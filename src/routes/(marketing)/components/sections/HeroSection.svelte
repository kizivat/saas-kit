<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import GitHubIcon from 'virtual:icons/lucide/github';
	import HeroAnimation from '../HeroAnimation.svelte';
</script>

<div class="grid md:grid-cols-2 items-center overflow-visible">
	<div class="flex flex-col sm:gap-6 items-center md:items-start">
		<h1
			class={cn(
				'inline',
				'text-xl md:text-3xl font-bold',
				'bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-secondary',
			)}
		>
			SaaS Kit Demo
		</h1>

		<p
			class={cn(
				'text-center md:text-left',
				'text-4xl md:text-6xl font-bold px-2 leading-[1.2]',
				'[&_em]:underline [&_em]:decoration-primary [&_em]:decoration-4 [&_em]:md:decoration-[6px] [&_em]:not-italic',
			)}
		>
			The <em>open source</em>, <em>fast</em>, and <em>free to host</em> SaaS template
		</p>
		<p class="md:text-lg text-center md:text-left">
			Built with <a
				href="https://kit.svelte.dev"
				class="link font-bold"
				target="_blank">SvelteKit</a
			>,
			<a href="https://supabase.com" class="link font-bold" target="_blank"
				>Supabase</a
			>,
			<a href="https://stripe.com" class="link font-bold" target="_blank"
				>Stripe</a
			>,
			<a href="https://tailwindcss.com" class="link font-bold" target="_blank"
				>Tailwind</a
			>,
			<a
				href="https://shadcn-svelte.com/"
				class="link font-bold"
				target="_blank">shadcn-svelte</a
			>, and
			<a
				href="https://www.postgresql.org"
				class="link font-bold"
				target="_blank">Postgres</a
			>.
		</p>
		<div class="mt-6 md:mt-2 flex gap-3">
			<Button href="/login">Try it out</Button>
			<Button
				variant="secondary"
				href="https://github.com/kizivat/saas-kit"
				target="_blank"
				class="flex flex-nowrap gap-2"
			>
				<GitHubIcon class="h-4 w-4" />
				View on GitHub
			</Button>
		</div>
	</div>

	<HeroAnimation />
</div>
