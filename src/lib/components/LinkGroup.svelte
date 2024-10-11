<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '$lib/components/Link.svelte';
	import BlurFade from '$lib/components/BlurFade.svelte';

	const links = [
		{
			name: 'GitHub',
			url: 'https://github.com/boian-ivanov'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/boian-ivanov'
		},
		{
			name: 'Stack Overflow',
			url: 'https://stackoverflow.com/users/5890686/boian-ivanov'
		},
		{
			name: 'CV',
			url: 'https://github.com/boian-ivanov/resume/raw/master/resume.pdf'
		}
	] as const;

	const angle = 360 / links.length;
	let rot = -90;
	const updateRotation = () => {
		console.log(rot);
		return (rot = rot + angle);
	};

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<aside class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
	<BlurFade delay={0.25}>
		<ul class="circle-container flex justify-center">
			{#if mounted}
				{#each links as { name, url }, i}
					<li>
						<Link {name} {url} />
					</li>
				{/each}
			{/if}
		</ul>
	</BlurFade>
</aside>

<style lang="scss">
	@mixin on-circle($item-count, $circle-size, $item-size) {
		position: relative;
		width: $circle-size;
		height: $circle-size;
		padding: 0;
		border-radius: 50%;
		list-style: none;

		> * {
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			width: $item-size;
			height: $item-size;
			margin: -(calc($item-size / 2));

			$angle: calc(360 / $item-count);
			$rot: 35;

			@for $i from 1 through $item-count {
				&:nth-of-type(#{$i}) {
					transform: rotate($rot * 1deg) translate(calc($circle-size / 2)) rotate($rot * -1deg);
					// animation: linear infinite alternate;
					// animation-name: run;
					// animation-duration: 2s;
				}

				$rot: $rot + $angle;
			}
		}
	}

	.circle-container {
		@include on-circle($item-count: 4, $circle-size: 32em, $item-size: 8em);
		& {
			margin: 5em auto 0;
		}
	}
</style>
