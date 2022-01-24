<script lang="ts">
	import type { Hat } from '../stores/hats';
	import { language } from '../stores/language';

	export let hat: Hat;
</script>

<a class="card" href={`/hat/${hat.type}`}>
	<i class={`hat-icon h-${hat.type} drop-shadow-md`} />
	<div class="bg-gray-100 w-full text-center flex-grow">
		<p>{$language[hat.name]}</p>
	</div>
</a>

<style lang="scss">
	p {
		padding: 0.5rem 1rem;
	}

	.card {
		@apply bg-card text-on-card;
		@apply border border-border-card rounded;
		@apply flex flex-col items-center;
		@apply transition-colors duration-theme;

		box-shadow: 0 0.18rem 0.06rem -0.12rem rgba(0, 0, 0, 0.2), 0 0.12rem 0.12rem 0 rgba(0, 0, 0, 0.14),
			0 0.06rem 0.28rem 0 rgba(0, 0, 0, 0.12);

		&:hover {
			@apply shadow-md;
		}
	}
</style>
