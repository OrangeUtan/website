<script lang="ts">
	import { hatsRegistry } from '../../stores/hats';
</script>

<svelte:head>
	<title>Hats</title>
</svelte:head>

{#each Object.entries($hatsRegistry) as [category, hats]}
	<h2>{category.trim().replace(/^\w/, (c) => c.toUpperCase())}</h2>
	{#each Object.entries(hats) as [id, hat]}
		<img src={`images/hats/icons/${id}.png`} alt="" />
	{/each}
{/each}
