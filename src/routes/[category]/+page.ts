import type { LoadEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';
import type { Category, Response } from '../../types';

export async function load({ fetch, params }: LoadEvent) {
	const { category } = params;

	const response = await fetch(
		`https://api.giphy.com/v1/gifs/categories/${category}?api_key=${env.PUBLIC_GIPHY_API_KEY}&limit=500`
	);

	const { data } = (await response.json()) as Response<Category[]>;

	return { subcategories: data };
}
