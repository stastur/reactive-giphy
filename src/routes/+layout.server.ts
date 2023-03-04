import type { ServerLoadEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';
import type { Category, Response } from '../types';

export async function load({ fetch }: ServerLoadEvent) {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/categories?api_key=${env.PUBLIC_GIPHY_API_KEY}`
	);

	const { data } = (await response.json()) as Response<Category[]>;

	return { categories: data };
}
