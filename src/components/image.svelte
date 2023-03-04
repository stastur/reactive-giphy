<script lang="ts">
	import type { Gif } from '../types';

	export let gifOnly = false;
	export let gif: Gif;

	let loading = false;
	let showingStill = gifOnly ? false : true;

	$: src = showingStill ? gif.images.fixed_width_still.url : gif.images.fixed_width.url;

	function switchImage() {
		if (gifOnly) {
			return;
		}

		loading = !loading;
		showingStill = !showingStill;
	}
</script>

<div class="relative w-full h-full">
	<img
		on:mouseover={switchImage}
		on:focus={switchImage}
		on:mouseleave={switchImage}
		on:load={() => (loading = false)}
		class="w-full h-full {$$props.class}"
		alt={gif.title}
		{src}
	/>

	<div class:hidden={!loading} class="loading-indicator" />
</div>

<style>
	.loading-indicator {
		position: absolute;
		height: 0.5em;
		bottom: 0;
		left: 0;
		width: 10%;
		background-color: #36ca6a;
		animation: loading 0.5s linear infinite;
	}

	@keyframes loading {
		to {
			left: 90%;
		}
	}
</style>
