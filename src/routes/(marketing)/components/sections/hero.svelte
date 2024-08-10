<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import GitHubIcon from 'virtual:icons/lucide/github';
	import HeroAnimation from '../HeroAnimation.svelte';
</script>

<div class="grid items-center gap-10 overflow-visible md:grid-cols-2">
	<div class="flex flex-col items-center gap-4 sm:gap-6 md:items-start">
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
			Launch Your SaaS with an
			<em>open-source</em> Template
		</p>
		<p class="text-center md:text-left md:text-lg [&_a]:underline">
			Kickstart your SaaS with a powerful, open-source starter kit. Built using
			<a href="https://kit.svelte.dev" target="_blank">SvelteKit</a>,
			<a href="https://supabase.io" target="_blank">Supabase</a>, and
			<a href="https://shadcn-svelte.com" target="_blank">shadcn-svelte</a>,
			with seamless <a href="https://stripe.com" target="_blank">Stripe</a> integration.
			Scale effortlessly to up to 50,000 users completely free.
		</p>
		<div class="mt-6 flex flex-wrap justify-center gap-3 md:mt-2">
			<Button href="/login">Get Started Now</Button>
			<Button
				variant="secondary"
				href="https://github.com/kizivat/saas-kit"
				target="_blank"
				class="flex flex-nowrap gap-2"
			>
				<GitHubIcon class="h-4 w-4" />
				Explore on GitHub
			</Button>
		</div>
	</div>

	<HeroAnimation />
</div>
