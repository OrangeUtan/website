<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
</script>

<svelte:head>
	<title>Hats Datapack</title>
	<link rel="icon" type="image/x-icon" href="/i/favicon.png" />
</svelte:head>

<div class="p-8 max-w-6xl mx-auto">
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
