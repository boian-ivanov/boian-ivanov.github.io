<script>
	import { setupViewTransition } from 'sveltekit-view-transition';

	export let multiLine = true;

	const { transition } = setupViewTransition();
</script>

<h1
	class="w-full justify-center font-semibold text-white"
	class:grid={multiLine}
	use:transition={'title'}
>
	<span class="text-center text-6xl font-extrabold capitalize">Hi,&nbsp;</span>
	<span
		class="bg-gradient-to-r from-sky-600 to-red-400 bg-clip-text text-center text-6xl font-extrabold text-transparent"
	>
		I'm Boian
	</span>
</h1>

<style>
	/* :global(::view-transition-old(title)),
	:global(::view-transition-new(title)) {
		animation:
			200ms ease 50ms both slide-up,
			200ms ease 50ms both slide-down;
	} */
	/* :global(::view-transition-old(title)) {
		animation-name: fade-out;
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}
	:global(::view-transition-new(title)) {
		animation-name: fade-in;
		animation-duration: 0.6s;
		animation-fill-mode: forwards;
	} */
</style>
