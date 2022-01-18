import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import yaml from 'js-yaml';

export interface Hat {
	cmd: number;
	lore?: Array<string>;
}
type HatsRegistry = Record<string, Record<string, Hat>>;

export const hatsRegistry: Writable<HatsRegistry> = writable({});

const fetchHatsRegistry = async () => {
	const url = 'https://raw.githubusercontent.com/OrangeUtan/Hats/main/hats/registry/hats.yml';
	const res = await fetch(url);
	const blob = await res.blob();
	const text = await blob.text();
	hatsRegistry.set(yaml.load(text));
};

fetchHatsRegistry();
