<script lang="ts">
	export let factor = 1;

	let percentage = 0;

	function scrollIndicator(node: HTMLElement) {
		const setScrollProgress = () => {
			percentage =
				(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 * factor;
		};

		document.addEventListener('scroll', setScrollProgress);
		const resizeObserver = new ResizeObserver(setScrollProgress);
		resizeObserver.observe(node);

		return {
			destroy: () => {
				document.removeEventListener('scroll', setScrollProgress);
				resizeObserver.disconnect();
			}
		};
	}
</script>

<svelte:body use:scrollIndicator />

<div class="w-0.5 h-full relative bg-green-400">
	{#if $$slots.start}
		<div class="absolute bottom-full -translate-x-1/2 mb-2">
			<slot name="start" />
		</div>
	{/if}

	<div
		class="absolute w-2 h-2 rounded bg-green-400 left-1/2 -translate-x-1/2 whitespace-nowrap"
		style:top="{percentage}%"
	>
		{#if $$slots.value}
			<div class="absolute top-1/2 -translate-y-1/2 right-3 whitespace-nowrap">
				<slot name="value" />
			</div>
		{/if}
	</div>

	{#if $$slots.end}
		<div class="absolute top-full -translate-x-1/2 whitespace-nowrap mt-2">
			<slot name="end" />
		</div>
	{/if}
</div>
