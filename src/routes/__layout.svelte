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
		--color-bg: #ffffff;
		--color-on-bg: #b8c5d3;
		--color-fg: var(--color-bg);
		--color-on-fg: #c2cfdd;
		--color-border: #373e47;
		--color-border-fg: #e0dddd;
		--color-header: #24292f;
		--color-on-header: #ffffff;
	}

	:global[data-theme='dark'] {
		--color-bg: #22272e;
		--color-on-bg: #b8c5d3;
		--color-fg: #2d333b;
		--color-on-fg: #c2cfdd;
		--color-border: #373e47;
		--color-border-fg: #3c424e;
		--color-header: var(--color-fg);
		--color-on-header: var(--color-on-fg);
	}

	:global body {
		background-color: var(--color-bg);
		height: 100%;
	}
</style>
