<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import type { Provider } from '@supabase/supabase-js';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import { oAuthProviders } from '../../../../config';

	async function loadIcon(provider: Provider) {
		switch (provider) {
			case 'google':
				return (await import('virtual:icons/devicon-plain/google')).default;
			case 'facebook':
				return (await import('virtual:icons/devicon-plain/facebook')).default;
			case 'apple':
				return (await import('virtual:icons/simple-icons/apple')).default;
			case 'twitter':
				return (await import('virtual:icons/bi/twitter-x')).default;
			case 'github':
				return (await import('virtual:icons/simple-icons/github')).default;
			default:
				console.warn(`Unknown provider: ${provider}`);
				throw new Error(`Unknown provider: ${provider}`);
		}
	}

	$: redirectTo = `redirectTo=${encodeURIComponent(`${$page.url.origin}/auth/callback?${$page.url.search}`)}`;
</script>

{#if oAuthProviders.length > 0}
	<form method="POST" class="flex flex-col gap-4">
		<!-- TODO: I don't like this hidden field here too much. Change later. -->
		<input type="hidden" name="query" value={$page.url.search} />
		<p class="flex text-sm text-muted-foreground">
			Continue with third-party service
		</p>
		<ul class="flex flex-wrap justify-center gap-4">
			{#each oAuthProviders as provider}
				<li>
					<Tooltip.Root openDelay={0} closeDelay={0}>
						<Tooltip.Trigger asChild let:builder>
							{#await loadIcon(provider)}
								<Button
									formaction="/login?provider={provider}&{redirectTo}"
									variant="outline"
									size="icon"
									builders={[builder]}
									type="submit"
								>
									<LoaderCircle class="h-4 w-4 animate-spin" />
								</Button>
							{:then Icon}
								<Button
									formaction="/login?provider={provider}&{redirectTo}"
									variant="outline"
									size="icon"
									builders={[builder]}
									type="submit"
								>
									<Icon class="size-4" />
									<span class="sr-only">Continue with {provider}</span>
								</Button>
							{:catch _}
								<Button
									formaction="/login?provider={provider}&{redirectTo}"
									variant="outline"
									builders={[builder]}
									type="submit"
								>
									{provider.charAt(0).toUpperCase() + provider.slice(1)}
								</Button>
							{/await}
						</Tooltip.Trigger>
						<Tooltip.Content side="bottom" sideOffset={8}>
							Continue with {provider.charAt(0).toUpperCase() +
								provider.slice(1)}
						</Tooltip.Content>
					</Tooltip.Root>
				</li>
			{/each}
		</ul>
		<div class="flex items-center gap-2 text-xs text-muted-foreground">
			<Separator class="flex-1" />
			<span>or</span>
			<Separator class="flex-1" />
		</div>
	</form>
{/if}
