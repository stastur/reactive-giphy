<script lang="ts">
	import { page } from '$app/stores';
	import CategoriesView from '../../components/categories-view.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Svelte Giphy | {$page.params.category}</title>
</svelte:head>

<CategoriesView categories={data.subcategories} />
