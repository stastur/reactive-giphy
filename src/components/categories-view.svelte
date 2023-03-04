<script lang="ts">
	import { page } from '$app/stores';
	import { flip } from '$lib/transitions';
	import { fade } from 'svelte/transition';
	import type { Category } from '../types';

	import Image from './image.svelte';

	export let categories: Category[];

	$: basePath = $page.url.pathname;
</script>

<div in:fade class="flex flex-wrap gap-8 m-4">
	{#each categories as category (category)}
		<div class="perspective">
			<a
				in:flip|local
				out:flip|local
				href="{basePath}/{category.name_encoded}"
				class="relative w-60 h-40 flex items-center justify-center"
			>
				<Image class="object-cover" gif={category.gif} />

				<span class="absolute stroke capitalize">{category.name}</span>
			</a>
		</div>
	{/each}
</div>

<style>
	.perspective {
		perspective: 500px;
	}

	.stroke {
		text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
	}
</style>
