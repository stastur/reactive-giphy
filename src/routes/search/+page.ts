import type { LoadEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';
import type { Gif, Response } from '../../types';

export async function load({ fetch, url }: LoadEvent) {
	const query = url.searchParams.get('q');

	const response = await fetch(
		`https://api.giphy.com/v1/gifs/search?q="${query}"&api_key=${env.PUBLIC_GIPHY_API_KEY}`
	);

	const { data } = (await response.json()) as Response<Gif[]>;

	return { results: data };
}

export const ssr = false;
