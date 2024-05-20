<script lang="ts">
	import * as LogosCloud from '$lib/components/landing/logos-cloud';
	import PostgresLogo from '~icons/devicon-plain/postgresql';
	import ShadcnLogo from '~icons/simple-icons/shadcnui';
	import StripeLogo from '~icons/simple-icons/stripe';
	import SupabaseLogo from '~icons/simple-icons/supabase';
	import SvelteLogo from '~icons/simple-icons/svelte';
	import TailwindLogo from '~icons/simple-icons/tailwindcss';
</script>

<LogosCloud.Root class="justify-around">
	<LogosCloud.Logo href="https://svelte.dev">
		<SvelteLogo />
	</LogosCloud.Logo>
	<LogosCloud.Logo href="https://supabase.com">
		<SupabaseLogo />
	</LogosCloud.Logo>
	<LogosCloud.Logo href="https://shadcn-svelte.com/">
		<ShadcnLogo />
	</LogosCloud.Logo>
	<LogosCloud.Logo href="https://tailwindcss.com">
		<TailwindLogo />
	</LogosCloud.Logo>
	<LogosCloud.Logo href="https://stripe.com">
		<StripeLogo />
	</LogosCloud.Logo>
	<LogosCloud.Logo href="https://www.postgresql.org">
		<PostgresLogo />
	</LogosCloud.Logo>
</LogosCloud.Root>
