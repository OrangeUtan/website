<script lang="ts">
	import type { Hat } from '../stores/hats';
	import { language } from '../stores/language';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	function showDetails() {
		areDetailsHidden = false;
	}

	function hideDetails() {
		areDetailsHidden = true;
	}

	function onFocusout(e: FocusEvent) {
		if (!cardEl.contains(e.relatedTarget as Node)) {
			hideDetails();
		}
	}

	export let hat: Hat;
	let areDetailsHidden = true;
	let cardEl: HTMLElement;

	onMount(() => {
		cardEl.addEventListener('focusout', onFocusout);

		return () => {
			cardEl.removeEventListener('focusout', onFocusout);
		};
	});
</script>

<a
	href={`/hat/${hat.type}`}
	class="card"
	on:mouseover={showDetails}
	on:mouseleave={hideDetails}
	on:focus={showDetails}
	bind:this={cardEl}
>
	<i class={`hat-icon h-${hat.type} drop-shadow-md`} />
	<div class="card-title">
		<p>{$language[hat.name]}</p>
		{#if !areDetailsHidden}
			<div class="card-details" in:slide={{ delay: 350, duration: 100 }} out:slide={{ duration: 100 }}>
				<button on:click|preventDefault={() => console.log('hi')}>/give</button>
				<button>{hat.cmd}</button>
			</div>
		{/if}
	</div>
</a>

<style lang="scss">
	p {
		padding: 0.5rem 1rem;
	}

	.card {
		@apply rounded;
		@apply bg-card text-on-card;
		@apply flex flex-col items-center;
		@apply transition-colors duration-theme;

		box-shadow: 0 0.18rem 0.06rem -0.12rem rgba(0, 0, 0, 0.2), 0 0.12rem 0.12rem 0 rgba(0, 0, 0, 0.14),
			0 0.06rem 0.28rem 0 rgba(0, 0, 0, 0.12);

		&:hover {
			@apply shadow-md;
		}
	}

	.card-title {
		@apply w-full text-center rounded-b bg-card-title;
	}

	.card-details {
		button {
			@apply p-2 mb-2 text-sm w-5/6 rounded;
			border: 1px solid #292d36;
			background: #313742;
		}
	}

	// :global* {
	// 	outline: 1px solid yellow;
	// }
</style>
