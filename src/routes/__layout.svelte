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

<main class="p-8 max-w-6xl mx-auto bg-bg text-on-bg border-border transition-colors duration-theme">
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	:global[data-theme='light'] {
		--color-bg: #ffffff;
		--color-on-bg: #24292f;
		--color-header: #24292f;
		--color-on-header: #ffffff;
		--color-card: var(--color-bg);
		--color-on-card: var(--color-on-bg);
		--color-border-card: #e0dddd;
		--color-border: #373e47;
	}

	:global[data-theme='dark'] {
		--color-bg: #22272e;
		--color-on-bg: #b8c5d3;
		--color-header: #2d333b;
		--color-on-header: #c2cfdd;
		--color-card: #2b3138;
		--color-on-card: #c2cfdd;
		--color-border-card: #383e49;
		--color-border: #373e47;
	}

	:global body {
		@apply transition-colors duration-theme;
		--duration-theme: 150ms;

		background-color: var(--color-bg);
		height: 100%;
	}
</style>
