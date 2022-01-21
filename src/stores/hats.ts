import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export interface Hat {
	type: string;
	cmd: number;
	lore?: Array<string>;
	additional_nbt?: Record<string, unknown>;
}

export const hatsByCategory: Writable<Record<string, Array<Hat>>> = writable({});

const fetchHatsByCategory = async () => {
	const url = 'https://orangeutan.github.io/Hats/api/hats_by_category.json';
	const res = await fetch(url);
	hatsByCategory.set(await res.json());
};

fetchHatsByCategory();
