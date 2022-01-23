<script lang="ts">
	import type { Hat } from '../stores/hats';
	import { language } from '../stores/language';

	export let hat: Hat;
</script>

<div
	class="border border-solid border-gray-200 text-gray-800 rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<i class={`hat-icon h-${hat.type} drop-shadow-md`} />
	<div class="bg-gray-100 w-full text-center flex-grow">
		<p class="">{$language[hat.name]}</p>
	</div>
</div>

<style>
	p {
		padding: 0.5rem 1rem;
	}
</style>
