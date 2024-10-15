<script lang="ts">
	export const prerender = true;

	export let data;

	import BlurFade from '$lib/components/BlurFade.svelte';
	import Title from '$lib/components/Title.svelte';
	import Video from '$lib/components/Video.svelte';
	import { formatDate } from '$lib/utils';

	let BLUR_FADE_DELAY = 0.04;
</script>

<main class="flex flex-col">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8 mb-2 md:mb-4">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<Title multiLine={false} />
				</div>
				<a href="/">
					<Video width={100} />
				</a>
			</div>
		</div>
	</section>
	<section>
		<ul class="posts">
			{#each data.posts as post, id}
				<li class="post">
					<BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
						<a class="mb-4 flex flex-col space-y-1" href="/blog/{post.slug}">
							<div class="flex w-full flex-col">
								<p class="tracking-tight">{post.title}</p>
								<p class="h-6 text-xs text-muted-foreground">
									{formatDate(post.date)}
								</p>
							</div>
						</a>
					</BlurFade>
				</li>
			{/each}
		</ul>
	</section>
</main>
