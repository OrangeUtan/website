<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
</script>

<svelte:head>
	<title>Hats Datapack</title>
	<link rel="icon" type="image/x-icon" href="/i/favicon.png" />
</svelte:head>

<header class="bg-header text-on-header">
	<Nav />
</header>

<main class="p-8 max-w-6xl mx-auto bg-bg text-on-bg border-border">
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global[data-theme='light'] {
		--color-bg: #FFFFF;
		--color-on-bg: #40454a;
	}

	:global[data-theme='dark'] {
		--color-bg: #22272e;
		--color-on-bg: #b8c5d3;
		--color-header: #2d333b;
		--color-on-header: #b8c5d3;
		--color-border: #373e47;
	}

	:global body {
		background-color: var(--color-bg);
		height: 100%;
	}
</style>
