<script lang="ts">
	import { cn } from '$lib/utils';

	const _themes = ['neutral', 'rose', 'yellow', 'green', 'orange'];

	let theme: (typeof _themes)[number] = 'neutral';

	function reset() {
		document.documentElement.classList.remove('neutral');
		document.documentElement.classList.remove('rose');
		document.documentElement.classList.remove('yellow');
		document.documentElement.classList.remove('green');
		document.documentElement.classList.remove('orange');
		document.documentElement.classList.remove('blue');
	}

	function setTheme(t: (typeof _themes)[number]) {
		reset();
		theme = t;
		document.documentElement.classList.add(t);
	}
</script>

<p class="my-3 italic text-muted-foreground">
	Try it yourself. Select a theme below to change it live.
</p>
<div class={cn(' flex gap-2 [&_button]:size-6 [&_button]:rounded-full')}>
	<button
		class={cn(
			'bg-neutral-500',
			theme === 'neutral' &&
				'ring-2 ring-neutral-500 ring-offset-2 ring-offset-background',
		)}
		on:click={() => {
			import(`./themes/neutral.css`);
			setTheme('neutral');
		}}
	>
		<span class="sr-only">neutral</span>
	</button>
	<button
		class={cn(
			'bg-yellow-500',
			theme === 'yellow' &&
				'ring-2 ring-primary ring-offset-2 ring-offset-background',
		)}
		on:click={() => {
			import('./themes/yellow.css');
			setTheme('yellow');
		}}
	>
		<span class="sr-only">yellow</span>
	</button>

	<button
		class={cn(
			'bg-rose-500',
			theme === 'rose' &&
				'ring-2 ring-primary ring-offset-2 ring-offset-background',
		)}
		on:click={() => {
			import('./themes/rose.css');
			setTheme('rose');
		}}
	>
		<span class="sr-only">rose</span>
	</button>
	<button
		class={cn(
			'bg-blue-500',
			theme === 'blue' &&
				'ring-2 ring-primary ring-offset-2 ring-offset-background',
		)}
		on:click={() => {
			import('./themes/blue.css');
			setTheme('blue');
		}}
	>
		<span class="sr-only">green</span>
	</button>
	<button
		class={cn(
			'bg-green-500',
			theme === 'green' &&
				'ring-2 ring-primary ring-offset-2 ring-offset-background',
		)}
		on:click={() => {
			import('./themes/green.css');
			setTheme('green');
		}}
	>
		<span class="sr-only">green</span>
	</button>
	<button
		class={cn(
			'bg-orange-500',
			theme === 'orange' &&
				'ring-2 ring-primary ring-offset-2 ring-offset-background',
		)}
		on:click={() => {
			import('./themes/orange.css');
			setTheme('orange');
		}}
	>
		<span class="sr-only">orange</span>
	</button>
</div>

<style>
	button.ring-2 {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath style='color:white' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20 6L9 17l-5-5'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}
</style>
