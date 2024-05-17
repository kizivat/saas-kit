<script>
	import '../../app.css';
</script>

<div class="navbar bg-base-100 container mx-auto">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">SaaS Starter</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
			<li class="md:mx-2"><a href="/pricing">Pricing</a></li>
			<li class="md:mx-2"><a href="/account">Log in</a></li>
		</ul>
		<div class="dropdown dropdown-end sm:hidden">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
			>
				<li><a href="/pricing">Pricing</a></li>
				<li><a href="/account">Log in</a></li>
			</ul>
		</div>
	</div>
</div>

<div class="">
	<slot />
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<div class="container max-w-screen-lg mx-auto">
	<div class="border-t max-w-[1000px] mx-auto"></div>
	<footer class="max-w-screen-lg footer p-10 text-base">
		<nav>
			<span class="footer-title opacity-80">Explore</span>
			<a class="link link-hover mb-1" href="/">Overview</a>
			<a class="link link-hover my-1" href="/pricing">Pricing</a>
			<a class="link link-hover my-1" href="/contact">Contact Us</a>
			<a class="link link-hover my-1" href="https://github.com/kizivat/saas-kit"
				>Github</a
			>
		</nav>
		<div class="place-self-end">
			<p>
				Based on <a
					class="underline"
					href="https://github.com/CriricalMoments/CMSaasStarter"
					>CriticalMoments/CMSaasStarter</a
				>.
			</p>
		</div>
	</footer>
</div>
