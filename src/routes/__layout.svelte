<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import { theme } from '$stores/theme';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($theme) {
			document.documentElement.dataset.theme = $theme;
		}
	});
</script>

<svelte:head>
	<title>Hats Datapack</title>
	<link rel="icon" type="image/x-icon" href="/i/favicon.png" />
</svelte:head>

<header>
	<Nav />
</header>

<main>
	<slot />
</main>

<style lang="scss">
	@use 'src/styles/global';
	@use 'src/styles/themes';

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	header {
		@apply bg-header text-on-header;
	}

	main {
		@apply bg-bg text-on-bg;
		@apply transition-colors duration-theme;
		@apply p-8 max-w-6xl mx-auto border-border;
	}
</style>
