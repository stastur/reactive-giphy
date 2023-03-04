<script lang="ts">
	import { page } from '$app/stores';
	import { Loader, ScrollIndicator } from '$lib/components';
	import { env } from '$env/dynamic/public';

	import GifsBoard from '../../../components/gifs-board.svelte';
	import type { Gif, Response } from '../../../types';

	async function fetchGifs(
		category: string,
		subcategory: string,
		params: { limit: number; offset: number }
	) {
		const url = new URL(`https://api.giphy.com/v1/gifs/categories/${category}/${subcategory}`);
		url.searchParams.set('api_key', env.PUBLIC_GIPHY_API_KEY!);
		url.searchParams.set('limit', params.limit.toString());
		url.searchParams.set('offset', params.offset.toString());

		const response = await fetch(url);
		return (await response.json()) as Response<Gif[]>;
	}

	let gifs: Gif[] = [];
	let pagination = { offset: 0, total_count: 0, count: 0 };
	let loading = false;

	async function loadData() {
		loading = true;

		const res = await fetchGifs($page.params.category, $page.params.subcategory, {
			limit: 100,
			offset: pagination.offset + pagination.count
		});

		gifs = [...gifs, ...res.data];
		pagination = res.pagination;
		loading = false;
	}

	function dataLoader(node: HTMLElement) {
		const intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting && !loading) {
					loadData();
				}
			});
		});

		intersectionObserver.observe(node);

		return {
			destroy: () => intersectionObserver.disconnect()
		};
	}

	$: dataLoaded = pagination.total_count ? gifs.length / pagination.total_count : 0;
</script>

<svelte:head>
	<title>Svelte Giphy | {$page.params.subcategory}</title>
</svelte:head>

<div class="h-96 fixed right-32">
	<ScrollIndicator factor={dataLoaded}>
		<span class="whitespace-nowrap" slot="value">You're here 👉</span>
		<span slot="end">{pagination.total_count} GIFs</span>
	</ScrollIndicator>
</div>

{#if gifs.length > 0}
	<GifsBoard {gifs} />
{/if}

{#if dataLoaded < 1}
	<div use:dataLoader class="w-full flex justify-center m-10">
		<Loader />
	</div>
{/if}
