import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

interface HatJson {
	type: string;
	cmd: number;
	lore?: string[];
	additional_nbt?: Record<string, unknown>;
}

export interface Hat {
	type: string;
	cmd: number;
	name: string;
	lore?: string[];
	additional_nbt?: Record<string, unknown>;
}

export const categories: Writable<Record<string, Hat[]>> = writable({});

const fetchCategories = async () => {
	const url = 'https://orangeutan.github.io/Hats/api/hats_by_category.json';
	const res = await fetch(url);
	const categoriesJson: Record<string, HatJson[]> = await res.json();

	categories.set(
		Object.fromEntries(
			Object.entries(categoriesJson).map(([category, hats]) => {
				return [
					category,
					hats.map((hatJson) => {
						return {
							type: hatJson.type,
							cmd: hatJson.cmd,
							name: `item.hats.hat.${hatJson.type}.name`,
							lore: hatJson.lore,
							additional_nbt: hatJson.additional_nbt
						} as Hat;
					})
				];
			})
		)
	);
};

fetchCategories();
