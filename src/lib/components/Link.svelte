<script lang="ts">
	import Icon from '@iconify/svelte';

	const iconsMap = {
		GitHub: 'simple-icons:github',
		LinkedIn: 'simple-icons:linkedin',
		'Stack Overflow': 'simple-icons:stackoverflow',
		CV: 'simple-icons:readdotcv'
	} as const;

	type Props = {
		name: keyof typeof iconsMap;
		url: string;
	};

	let { name, url }: Props = $props();

	// class="relative inline-flex items-center justify-center rounded-lg border border-gray-600 bg-black
	//  px-4 py-2 text-white shadow-md shadow-blue-500/40 transition-all duration-200
	//  hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/40
	// "
</script>

<div class="group relative inline-flex">
	<div
		class="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"
	></div>
	<a
		target="_blank"
		href={url}
		class="font-pj relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
  "
	>
		<Icon icon={iconsMap[name]} width="28" />
		<span class="ml-2">{name}</span>
	</a>
</div>
