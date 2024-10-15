<script lang="ts">
	import { setupViewTransition } from 'sveltekit-view-transition';

	export let width = 150;
	const height = width * 1.12;

	let stream: MediaProvider | null;

	function srcObject(node: HTMLVideoElement, stream: MediaProvider | null) {
		node.srcObject = stream;
		return {
			update(newStream: MediaProvider | null) {
				if (node.srcObject != newStream) {
					node.srcObject = newStream;
				}
			}
		};
	}

	function handlePlay(e: Event) {
		(e.target as HTMLVideoElement)?.play();
	}

	const { transition } = setupViewTransition();
</script>

<div class="" use:transition={'memoji'}>
	<video
		id="portfolio-vid"
		class="mx-auto mb-2"
		{width}
		{height}
		use:srcObject={stream}
		on:mouseover={handlePlay}
		on:focus={handlePlay}
		preload="auto"
		muted
		autoplay
		playsinline
	>
		<source src="/video.mp4#t=0.1" type="video/mp4" />
		<track kind="captions" />
		Your browser does not support the video tag.
	</video>
</div>

<style>
	/* :global(::view-transition-old(memoji)),
	:global(::view-transition-new(memoji)) {
		animation:
			200ms ease 50ms both fade-in,
			200ms ease 50ms both slide-up;
	} */

	:global(::view-transition-old(memoji)) {
		animation-name: fade-out;
		animation-duration: 0.3s;
		animation-fill-mode: backwards;
	}
	:global(::view-transition-new(memoji)) {
		animation-name: fade-in;
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}

	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
