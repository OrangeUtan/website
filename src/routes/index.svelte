<script lang="ts">
	import { categories } from '$stores/hats';
	import type { Hat } from '$stores/hats';
	import { language } from '$stores/language';
	import { Circle3 } from 'svelte-loading-spinners';
	import HatCard from '$components/HatCard.svelte';

	let searchTerm = '';
	let filteredCategories = $categories;

	function hatMatchesSearchTerm(searchTerm: string, hat: Hat) {
		return (
			$language[hat.name]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			hat.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
			String(hat.cmd).includes(searchTerm)
		);
	}

	$: if (searchTerm) {
		filteredCategories = Object.fromEntries(
			Object.entries($categories)
				.map(([category, hats]) => {
					return [category, hats.filter((hat) => hatMatchesSearchTerm(searchTerm, hat))];
				})
				.filter(([_, hats]) => {
					return Object.keys(hats).length > 0;
				})
		);
	} else {
		filteredCategories = $categories;
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/i/hatIcons.css" />
</svelte:head>

<input
	type="text"
	placeholder="Filter"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
/>

{#each Object.entries(filteredCategories) as [category, hats] (category)}
	<h1 class="category-heading">
		{category.trim().replace(/^\w/, (c) => c.toUpperCase())}
	</h1>
	<div class="grid gap-2 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-start">
		{#each hats as hat (hat.type)}
			<HatCard {hat} />
		{/each}
	</div>
{:else}
	<div class="flex justify-center items-center p-8">
		<Circle3 />
	</div>
{/each}

<style lang="scss">
	.category-heading {
		@apply text-2xl text-left;
		@apply pt-4 pb-4;
	}
</style>
