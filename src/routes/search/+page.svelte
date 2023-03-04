<script lang="ts">
	import GifsBoard from '../../components/gifs-board.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Search</title>
</svelte:head>

{#if data.results.length === 0}
	No results :(
{:else}
	<GifsBoard gifs={data.results} />
{/if}
