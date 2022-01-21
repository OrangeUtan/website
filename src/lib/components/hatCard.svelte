<script lang="ts">
	import type { Hat } from '../stores/hats';
	import { language } from '../stores/language';

	export let hat: Hat;
</script>

<a
	class="p-4 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href=""
>
	<i class={`h-18 w-18 icon-${hat.type}`} />
	<h2 class="">{$language[hat.name]}</h2>
</a>
