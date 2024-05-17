<script lang="ts">
	import { WebsiteName } from './../../config';
</script>

<svelte:head>
	<title>{WebsiteName}</title>
	<meta name="description" content="{WebsiteName} Home Page" />
</svelte:head>

<div class="hero min-h-[60vh] mx-auto">
	<div class="hero-content text-center py-12 mx-auto">
		<div class="max-w-xl mx-auto">
			<div
				class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 md:mb-8"
			>
				SaaS Starter Demo
			</div>

			<p class="text-4xl md:text-6xl font-bold px-2" style="line-height: 1.2;">
				The
				<span
					class="underline decoration-secondary decoration-4 md:decoration-[6px]"
					>open source</span
				>,
				<span
					class="underline decoration-secondary decoration-4 md:decoration-[6px]"
					>fast</span
				>, and
				<span
					class="underline decoration-secondary decoration-4 md:decoration-[6px]"
					>free to host</span
				>
				<span> SaaS template</span>
			</p>
			<p class="mt-6 md:mt-10 text-sm md:text-lg">
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
				>
			</p>
			<div class="mt-6 md:mt-2">
				<a href="https://github.com/kizivat/saas-kit/tree/main#saas-kit">
					<button class="btn btn-outline btn-sm px-6 mt-3 mx-2">
						Read the Docs
					</button>
				</a>
			</div>
		</div>
	</div>
</div>
