<script lang="ts">
	import { cn } from '$lib/utils';

	const themes = ['neutral', 'rose', 'yellow', 'green', 'orange'];

	let theme: (typeof themes)[number] = 'neutral';

	function reset() {
		document.documentElement.classList.remove('neutral');
		document.documentElement.classList.remove('rose');
		document.documentElement.classList.remove('yellow');
		document.documentElement.classList.remove('green');
		document.documentElement.classList.remove('orange');
		document.documentElement.classList.remove('blue');
	}

	function setTheme(t: (typeof themes)[number]) {
		reset();
		theme = t;
		document.documentElement.classList.add(t);
	}
</script>

<div class={cn(' flex gap-4 [&_button]:rounded-full [&_button]:p-5')}>
	<button
		class={cn(
			'bg-neutral-500',
			theme === 'neutral' &&
				'ring-2 ring-neutral-500 ring-offset-background ring-offset-2',
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
				'ring-2 ring-primary ring-offset-background ring-offset-2',
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
				'ring-2 ring-primary ring-offset-background ring-offset-2',
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
				'ring-2 ring-primary ring-offset-background ring-offset-2',
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
				'ring-2 ring-primary ring-offset-background ring-offset-2',
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
				'ring-2 ring-primary ring-offset-background ring-offset-2',
		)}
		on:click={() => {
			import('./themes/orange.css');
			setTheme('orange');
		}}
	>
		<span class="sr-only">orange</span>
	</button>
</div>
