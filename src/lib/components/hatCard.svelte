<script lang="ts">
	import type { Hat } from '../stores/hats';
	import { language } from '../stores/language';

	export let hat: Hat;
</script>

<a
	class="border border-border rounded-md shadow-md hover:shadow-md flex flex-col items-center"
	href={`/hat/${hat.type}`}
>
	<i class={`hat-icon h-${hat.type} drop-shadow-md`} />
	<div class="bg-gray-100 w-full text-center flex-grow">
		<p>{$language[hat.name]}</p>
	</div>
</a>

<style lang="scss">
	p {
		padding: 0.5rem 1rem;
	}
</style>
