<script lang="ts">
	import ThemeToggle from './themeToggle.svelte';

	function toggleTheme() {
		dark = !dark;
		const theme = dark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
	}

	let dark = false;
</script>

<nav class="flex justify-between align-middle pt-3 pb-3 pr-6 pl-6 shadow-md">
	<a href="/" class="text-xl">
		<img class="inline-block align-text-top" src="/i/favicon.png" alt="" width="35" height="35" />
		Hats
	</a>
	<div class="flex gap-5 text-center">
		<ThemeToggle />
	</div>
</nav>
