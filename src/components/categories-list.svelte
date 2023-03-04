<script lang="ts">
	import { page } from '$app/stores';
	import type { Category } from '../types';

	export let categories: Category[];

	$: isActive = (categoryName: string) => $page.params.category === categoryName;
</script>

<ul>
	{#each categories as category}
		<li>
			<a
				class="flex capitalize"
				class:text-primary={isActive(category.name_encoded)}
				href={`/${category.name_encoded}`}
			>
				{category.name}
			</a>
		</li>
	{/each}
</ul>
