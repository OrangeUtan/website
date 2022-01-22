<script lang="ts">
	import { categories } from '$stores/hats';
	import type { Hat } from '$stores/hats';
	import { language } from '$stores/language';
	import HatCard from '$components/hatCard.svelte';
	import { Circle3 } from 'svelte-loading-spinners';

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

<h1 class="text-4xl text-center my-8 uppercase">Hats Datapack</h1>

<input
	type="text"
	placeholder="Filter"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
/>

{#each Object.entries(filteredCategories) as [category, hats] (category)}
	<h2 class="text-2xl text-center p-4">
		{category.trim().replace(/^\w/, (c) => c.toUpperCase())}
	</h2>
	<div class="grid gap-4 lg:grid-cols-7 md:grid-cols-5 grid-cols-3">
		{#each hats as hat (hat.type)}
			<HatCard {hat} />
		{/each}
	</div>
{:else}
	<div class="flex justify-center items-center p-8">
		<Circle3 />
	</div>
{/each}
