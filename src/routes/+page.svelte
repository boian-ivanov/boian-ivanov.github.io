<script lang="ts">
	export const prerender = true
	import Meteors from '$lib/components/Meteors.svelte';
	import DockGroup from '$lib/components/DockGroup.svelte';
	import OrbitingCircles from '$lib/components/OrbitingCircles.svelte';

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
			class="mx-auto"
			width="150"
			height="100"
			preload="auto"
			on:mouseover={handlePlay}
			on:focus={handlePlay}
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
</main>
<!-- 
<style>
	.me {
		/* background: -webkit-linear-gradient(right, #0284c7, #f87171); */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-shadow: 0px 0px #00000000;
	}
</style> -->
