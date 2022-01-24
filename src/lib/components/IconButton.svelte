<button on:click>
	<slot />
</button>

<style lang="scss">
	button {
		@apply relative p-2 w-10 h-10;

		&::before {
			@apply bg-white rounded-3xl opacity-0;
			@apply w-full h-full;
			@apply absolute left-0 top-0;
			content: '';
		}

		&:hover::before {
			@apply opacity-5;
		}
	}

	button::before {
		&:hover {
			@apply bg-white rounded-3xl opacity-5;
			@apply w-full h-full;
			@apply absolute left-0 top-0;
			content: '';
		}
	}
</style>
