<script lang="ts">
	import { onDestroy } from 'svelte';

	export let text: string;

	let copied = false;
	let copiedInterval: ReturnType<typeof setInterval> | undefined;

	function copy() {
		copied = true;
		navigator.clipboard.writeText(text);

		clearInterval(copiedInterval);
		copiedInterval = setInterval(() => (copied = false), 1000);
	}

	onDestroy(() => clearInterval(copiedInterval));
</script>

<button on:click={copy} {...$$props}>
	<slot {copied} />
</button>
