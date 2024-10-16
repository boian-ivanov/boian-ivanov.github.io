<script lang="ts">
	export const prerender = true;

	import { MetaTags } from 'svelte-meta-tags';
	import Particles from '$lib/components/Particles.svelte';
	import DockGroup from '$lib/components/DockGroup.svelte';
	import Title from '$lib/components/Title.svelte';
	import Video from '$lib/components/Video.svelte';
</script>

<MetaTags
  title="Home page"
  titleTemplate="%s | Boian.Dev"
  description="The personal homepage of Boian. Use the links bellow to get in touch with me."
  canonical="https://boian.dev/"
  openGraph={{
    url: 'https://boian.dev/',
    title: 'Home page | Boian.dev',
    description: 'The personal homepage of Boian. Use the links bellow to get in touch with me.',
    images: [
      {
        url: 'https://boian.dev/first.jpg',
        width: 200,
        height: 224,
        alt: 'MeMoji Version of me'
      }
    ],
    siteName: 'Boian.Dev'
  }}
/>

<main class="fixed inset-0 flex min-h-[100dvh] flex-col justify-center bg-black align-middle">
	<div class="z-10 gap-4">
		<Video />
		<Title />
	</div>
	<DockGroup />
	<Particles className="absolute inset-0" refresh={true} />
</main>
