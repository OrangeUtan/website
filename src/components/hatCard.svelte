<script lang="ts">
	import type { Hat } from '../stores/hats';

	export let id: string;
	export let hat: Hat;

	function capitalizeWords(s: string) {
		const words = s.split(' ');
		return words
			.map((word) => {
				return word[0].toUpperCase() + word.substring(1);
			})
			.join(' ');
	}
</script>

<a
	class="p-4 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href=""
>
	<i class={`h-18 w-18 icon-${id}`} />
	<h2 class="">{capitalizeWords(id.replace(/_/g, ' '))}</h2>
</a>
