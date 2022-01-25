<script lang="ts">
	import ThemeToggle from '$components/ThemeToggle.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<nav>
	<a href="/" class="text-xl">
		<img
			class="inline-block align-text-top bg-orange-400 rounded-lg p-1"
			src="/i/favicon.png"
			alt=""
			width="35"
			height="35"
		/>
	</a>
	<div class="right">
		<LanguageSwitcher />
		<ThemeToggle />
	</div>
</nav>

<style lang="scss">
	nav {
		@apply flex justify-between w-full;
		@apply py-3 px-6;
		@apply max-w-3xl;

		.right {
			@apply flex gap-2;
			@apply text-center;
		}
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
