<script lang="ts">
	import logo from '$lib/assets/powered-light.png';
	import { CodeBracket } from '$lib/icons';
	import CategoriesList from '../components/categories-list.svelte';
	import Search from '../components/search.svelte';
	import '../app.css';

	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<div class="grid gap-8 min-h-screen layout">
	<header class="flex justify-between items-center bg-green-400">
		<a class="p-2 inline-block" href="/">
			<img class="h-12" src={logo} alt="powered by giphy" />
		</a>

		<Search class="p-2" />
	</header>

	<aside class="px-4">
		<h1 class="text-2xl mb-6">Categories</h1>

		<CategoriesList categories={data.categories} />
	</aside>

	<main>
		<slot />
	</main>

	<footer class="flex gap-2 justify-center items-center border-primary border-t-[1px] p-4">
		<CodeBracket class="w-6" />
		<a href="https://github.com/stastur/reactive-giphy"> Source code </a>
	</footer>
</div>

<style>
	.layout {
		grid-template-areas:
			'header header header header'
			'. aside  main  .'
			'footer footer footer footer';
		grid-template-rows: min-content auto min-content;
		grid-template-columns: 0.1fr auto 1fr 0.1fr;
	}

	header {
		grid-area: header;
	}

	aside {
		grid-area: aside;
	}

	main {
		grid-area: main;
	}

	footer {
		grid-area: footer;
	}
</style>
