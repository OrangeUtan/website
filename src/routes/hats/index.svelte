<script lang="ts">
	import { categories } from '../../stores/hats';
	import HatCard from '../../components/hatCard.svelte';

	let searchTerm = '';
	let filteredCategories = $categories;

	$: if (searchTerm) {
		filteredCategories = Object.fromEntries(
			Object.entries($categories)
				.map(([category, hats]) => {
					return [
						category,
						hats.filter((hat) => {
							hat.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
								String(hat.cmd).includes(searchTerm);
						})
					];
				})
				.filter(([category, hats]) => {
					return Object.keys(hats).length > 0;
				})
		);
	} else {
		filteredCategories = $categories;
	}
</script>

<svelte:head>
	<title>Hats Datapack</title>
	<link rel="stylesheet" href="/images/hats/spritesheets/icons.css" />
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Hats Datapack</h1>

<input
	type="text"
	placeholder="Filter"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
/>

{#each Object.entries(filteredCategories) as [category, hats]}
	<h2 class="text-2xl text-center p-4">
		{category.trim().replace(/^\w/, (c) => c.toUpperCase())}
	</h2>
	<div class="grid gap-4 lg:grid-cols-7 md:grid-cols-5 grid-cols-3">
		{#each hats as hat}
			<HatCard {hat} />
		{/each}
	</div>
{/each}
