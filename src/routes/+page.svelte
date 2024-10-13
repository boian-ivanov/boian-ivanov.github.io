<script lang="ts">
	export const prerender = true;

	import Particles from '$lib/components/Particles.svelte';
	import DockGroup from '$lib/components/DockGroup.svelte';

	export let stream: MediaProvider | null;

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
</script>

<main
	class="fixed inset-0 flex h-full flex-col justify-center overflow-hidden bg-black align-middle"
>
	<div class="z-10 gap-4">
		<video
			id="portfolio-vid"
			class="mx-auto mb-2"
			width="150"
			height="168"
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
		<h1 class="grid w-full justify-center font-semibold text-white">
			<span class="text-center text-6xl font-extrabold capitalize"> Hi, </span>
			<span
				class="block bg-gradient-to-r from-sky-600 to-red-400 bg-clip-text text-center text-6xl font-extrabold capitalize text-transparent"
			>
				I'm Boian
			</span>
		</h1>
	</div>
	<DockGroup />
	<Particles className="absolute inset-0" refresh={true} />
</main>
