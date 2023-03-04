<script lang="ts">
	import { page } from '$app/stores';

	$: pathParts = $page.url.pathname.split('/').filter(Boolean);
	$: crumbs = pathParts.map((p, i, arr) => ({ name: p, href: arr.slice(0, i + 1).join('/') }));
</script>

<div>
	{#each crumbs as crumb}
		<a class="before:content-['/']" href={`/${crumb.href}`}>{crumb.name}</a>
	{/each}
</div>
