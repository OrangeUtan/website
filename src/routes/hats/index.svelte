<script lang="ts">
	import { hatsRegistry } from '../../stores/hats';
	import HatCard from '../../components/hatCard.svelte';
</script>

<svelte:head>
	<title>Hats Datapack</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Hats Datapack</h1>

{#each Object.entries($hatsRegistry) as [category, hats]}
	<h2>{category.trim().replace(/^\w/, (c) => c.toUpperCase())}</h2>
	<div class="grid gap-4 md:grid-cols-5 grid-cols-1">
		{#each Object.entries(hats) as [id, hat]}
			<HatCard {id} {hat} />
		{/each}
	</div>
{/each}
