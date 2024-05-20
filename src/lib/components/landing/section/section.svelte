<script lang="ts">
	export let anchor: string | undefined = undefined;
</script>

<section id={anchor} class="flex flex-col gap-10">
	<slot />
</section>
