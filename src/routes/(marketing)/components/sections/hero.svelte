<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import GitHubIcon from 'virtual:icons/lucide/github';
	import HeroAnimation from '../HeroAnimation.svelte';
</script>

<div class="grid items-center overflow-visible md:grid-cols-2">
	<div class="flex flex-col items-center sm:gap-6 md:items-start">
		<h1
			class={cn(
				'inline',
				'text-xl font-bold md:text-3xl',
				'bg-gradient-to-r from-primary/20 via-primary to-primary/20 bg-clip-text text-transparent',
			)}
		>
			SaaS Kit Demo
		</h1>

		<p
			class={cn(
				'text-center md:text-left',
				'px-2 text-4xl font-bold leading-[1.2] md:text-6xl',
				'[&_em]:not-italic [&_em]:underline [&_em]:decoration-primary [&_em]:decoration-4 [&_em]:md:decoration-[6px]',
			)}
		>
			The <em>MIT</em> licensed, <em>optimized</em>, and <em>free to run</em> SaaS
			template
		</p>
		<p class="text-center md:text-left md:text-lg">
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
		<div class="mt-6 flex gap-3 md:mt-2">
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
