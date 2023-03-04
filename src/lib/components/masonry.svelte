<script lang="ts">
	import { afterUpdate, onDestroy } from 'svelte';

	let container: HTMLElement | undefined;

	function calculateColumns(container: HTMLElement, gap = 0) {
		const child = container.firstElementChild;

		if (!child) {
			return 0;
		}

		const containerW = container.clientWidth;
		const childW = child.clientWidth + gap;

		return Math.floor(containerW / childW);
	}

	function placeChildren(container: HTMLElement, gap: number) {
		const elements = Array.from(container.children) as HTMLElement[];

		const cols = Math.max(calculateColumns(container, gap), 1);
		const colHeights = new Array(cols).fill(0);

		elements.forEach((el, i) => {
			el.classList.add('masonry__cell');

			const colIndex = i % cols;
			colHeights[colIndex] += el.offsetHeight + gap;

			const elAbove = i >= cols ? elements[i - cols] : undefined;
			const elOnLeft = colIndex !== 0 ? elements[i - 1] : undefined;

			let shiftX = 0;
			let shiftY = 0;
			let prevX = 0;
			let prevY = 0;

			if (elAbove) {
				prevY = +getComputedStyle(elAbove).getPropertyValue('--y');
				shiftY = elAbove.offsetHeight + gap;
			}

			if (elOnLeft) {
				prevX = +getComputedStyle(elOnLeft).getPropertyValue('--x');
				shiftX = elOnLeft.offsetWidth + gap;
			}

			el.style.setProperty('--x', String(prevX + shiftX));
			el.style.setProperty('--y', String(prevY + shiftY));
		});

		container.style.height = Math.max(...colHeights) + 'px';
	}

	const resizeObserver = new ResizeObserver(() => container && placeChildren(container, 16));

	afterUpdate(() => {
		if (container) {
			resizeObserver.disconnect();
			resizeObserver.observe(container);
			Array.from(container.children).forEach((c) => resizeObserver.observe(c));
		}
	});

	onDestroy(() => {
		resizeObserver.disconnect();
	});
</script>

<div class="relative w-full flex" bind:this={container}>
	<slot />
</div>

<style>
	:global(.masonry__cell) {
		--x: 0;
		--y: 0;

		position: absolute;
		transform: translate3d(calc(var(--x) * 1px), calc(var(--y) * 1px), 0);

		transition: transform 0.5s;
		animation: appear 0.5s;
	}

	@keyframes appear {
		from {
			transform: translate3d(calc(var(--x) * 1px), calc(var(--y) * 1px), 0) scale(0);
		}

		to {
			transform: translate3d(calc(var(--x) * 1px), calc(var(--y) * 1px), 0) scale(1);
		}
	}
</style>
