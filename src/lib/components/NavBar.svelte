<script lang="ts">
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<nav>
	<a href="/" class="text-xl">
		<img class="inline-block align-text-top" src="/i/favicon.png" alt="" width="35" height="35" />
		Hats
	</a>
	<div class="right">
		<LanguageSwitcher />
		<ThemeToggle />
	</div>
</nav>

<style lang="scss">
	nav {
		@apply flex justify-between align-middle;
		@apply pt-3 pb-3 pr-6 pl-6;
		@apply shadow-md;

		.right {
			@apply flex gap-2;
			@apply text-center;
		}
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
