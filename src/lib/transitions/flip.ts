import { backOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';
import type { TransitionOptions } from './types';

type Options = {
	duration?: number;
	easing?: EasingFunction;
};

/**
 * Specify perspective on parent element to have a 3d effect
 */
export function flip(
	_node: Element,
	{ duration = 500, easing = backOut }: Options = {},
	{ direction }: TransitionOptions = { direction: 'both' }
): TransitionConfig {
	const delay = direction === 'out' ? 0 : duration;

	return {
		delay,
		duration,
		css: (t) => {
			const eased = easing(t);
			const angle = direction === 'out' ? 90 - 90 * eased : 270 + 90 * eased;

			return `
        transform: rotateY(${angle}deg);
      `;
		}
	};
}
