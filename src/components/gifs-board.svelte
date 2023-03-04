<script lang="ts">
	import { CheckIcon, LinkIcon } from '$lib/icons';
	import { Masonry, Clipboard } from '$lib/components';

	import Image from './image.svelte';
	import type { Gif } from '../types';

	export let gifs: Gif[] = [];
</script>

<Masonry>
	{#each gifs as g}
		<div>
			<div class="relative w-96">
				<Clipboard class="absolute right-0 z-[1] m-2 w-5 " text={g.images.original.url} let:copied>
					{#if copied}
						<CheckIcon class="w-6" />
					{:else}
						<LinkIcon class="w-6" />
					{/if}
				</Clipboard>

				<Image gif={g} gifOnly />
			</div>
		</div>
	{/each}
</Masonry>
