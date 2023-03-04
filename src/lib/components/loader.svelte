<div class="flex items-center gap-10">
	<div class="w-4 h-4 bg-green-400 bouncing" style="--delay: 0;" />
	<div class="w-4 h-4 bg-indigo-300 bouncing" style="--delay: 100;" />
	<div class="w-4 h-4 bg-orange-400 bouncing" style="--delay: 200;" />
	<div class="w-4 h-4 bg-sky-400 bouncing" style="--delay: 300;" />
	<div class="w-4 h-4 bg-yellow-200 bouncing" style="--delay: 400;" />
</div>

<style>
	.bouncing {
		--delay: 0;
		--duration: 400;

		animation: bounce ease-in-out infinite alternate;
		animation-duration: calc(var(--duration) * 1ms);
		animation-delay: calc(var(--delay) * 1ms);

		transform: translateY(100%);
	}

	@keyframes bounce {
		to {
			transform: translateY(-100%);
		}
	}
</style>
