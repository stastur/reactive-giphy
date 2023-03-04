<script lang="ts">
	import { goto } from '$app/navigation';
	import { MagnifyingGlass } from '$lib/icons';

	let value = '';

	function openSearchResults() {
		goto(`/search?q=${value}`);
	}
</script>

<div class="flex items-center h-8 {$$props.class}">
	<button on:click={openSearchResults} class="w-8 h-8 p-1  bg-cyan-300 hover:bg-cyan-400 text-white"
		><MagnifyingGlass /></button
	>

	<input class="h-8 p-1 text-black" type="search" placeholder="Search..." bind:value />
</div>
