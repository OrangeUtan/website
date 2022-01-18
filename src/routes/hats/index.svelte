<script lang="ts">
	import { hatsRegistry } from '../../stores/hats';
	import HatCard from '../../components/hatCard.svelte';
	import { identity } from 'svelte/internal';

	let searchTerm = '';
	let filteredRegistry = {};

	$: if (searchTerm) {
		filteredRegistry = Object.fromEntries(
			Object.entries($hatsRegistry)
				.map(([category, hats]) => {
					hats = Object.fromEntries(
						Object.entries(hats).filter(([id, hat]) => {
							return (
								id.toLowerCase().includes(searchTerm.toLowerCase()) ||
								String(hat.cmd).includes(searchTerm)
							);
						})
					);
					return [category, hats];
				})
				.filter(([category, hats]) => {
					return Object.keys(hats).length > 0;
				})
		);
	} else {
		filteredRegistry = $hatsRegistry;
	}
</script>

<svelte:head>
	<title>Hats Datapack</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Hats Datapack</h1>

<input
	type="text"
	placeholder="Filter"
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
/>

{#each Object.entries(filteredRegistry) as [category, hats]}
	<h2 class="text-2xl text-center p-4">
		{category.trim().replace(/^\w/, (c) => c.toUpperCase())}
	</h2>
	<div class="grid gap-4 lg:grid-cols-7 md:grid-cols-5 grid-cols-3">
		{#each Object.entries(hats) as [id, hat]}
			<HatCard {id} {hat} />
		{/each}
	</div>
{/each}
