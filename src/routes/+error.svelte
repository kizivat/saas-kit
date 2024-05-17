<script>
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import '../app.css';
</script>

<div class="hero min-h-[100vh]">
	<div class="hero-content text-center">
		<div class="max-w-lg">
			<h1 class="text-5xl font-bold">This is embarassing...</h1>
			<p class="py-6 text-2xl">There was an error: {$page?.error?.message}</p>
			<div>
				<Button href="/" class="btn btn-primary btn-wide">Return Home</Button>
			</div>
		</div>
	</div>
</div>
