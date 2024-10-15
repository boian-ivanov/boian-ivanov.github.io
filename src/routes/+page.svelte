<script lang="ts">
	export const prerender = true;

	import Particles from '$lib/components/Particles.svelte';
	import DockGroup from '$lib/components/DockGroup.svelte';
	import Title from '$lib/components/Title.svelte';
	import Video from '$lib/components/Video.svelte';
</script>

<main class="fixed inset-0 flex min-h-[100dvh] flex-col justify-center bg-black align-middle">
	<div class="z-10 gap-4">
		<Video />
		<Title />
	</div>
	<DockGroup />
	<Particles className="absolute inset-0" refresh={true} />
</main>
