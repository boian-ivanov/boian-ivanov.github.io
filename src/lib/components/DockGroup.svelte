<script lang="ts">
	// Lucide Svelte
	import { PencilLine } from 'lucide-svelte';
	// Simple Icons : simpleicons.org
	import GithubSvg from '$lib/svg/web/github.svg';
	import LinkedInSvg from '$lib/svg/web/linkedin.svg';
	import MailSvg from '$lib/svg/web/gmail.svg';
	import FileSvg from '$lib/svg/web/file.svg';
	//    Shadcn Components
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Separator } from '$lib/components/ui/separator';
	//   Major Components
	import Dock from './Dock.svelte';
	import DockIcon from './DockIcon.svelte';
	import type { Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	type Links = {
		label: string;
		icon: string;
		href: string;
	};

	type LinksWithIcon = Omit<Links, 'icon'> & {
		icon: ComponentType<Icon>
	}

	type Navigation = {
		navbar: LinksWithIcon[];
		contact: Links[];
	};

	let navs: Navigation = {
		navbar: [
			// { label: 'Home', icon: Home, href: '#' },
			{ label: 'Blog', icon: PencilLine, href: '/blog' }
			// { label: 'Developer', icon: TvMinimalPlay, href: '#' }
		],
		contact: [
			{ label: 'Github', icon: GithubSvg, href: 'https://github.com/boian-ivanov' },
			{ label: 'LinkedIn', icon: LinkedInSvg, href: 'https://linkedin.com/in/boian-ivanov' },
			{ label: 'Email', icon: MailSvg, href: 'mailto:boian.ivanov44@gmail.com' },
			{
				label: 'Resume',
				icon: FileSvg,
				href: 'https://github.com/boian-ivanov/resume/raw/master/resume.pdf'
			}
		]
	};
</script>

<aside class="z-10">
	<Dock direction="middle" class="relative" let:mouseX let:distance let:magnification>
		{#each navs.navbar as item}
			<DockIcon {mouseX} {magnification} {distance}>
				<Tooltip.Root>
					<Tooltip.Trigger
						class="mx-0 rounded-full p-3 transition-all duration-200 hover:bg-zinc-900/80"
					>
						<a href={item.href}>
							<svelte:component this={item.icon} size={22} strokeWidth={1.2} color="#fff" />
						</a>
					</Tooltip.Trigger>
					<Tooltip.Content sideOffset={8}>
						<p>{item.label}</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</DockIcon>
		{/each}
		<Separator orientation="vertical" class="h-full w-[0.6px]" />
		{#each navs.contact as item}
			<a href={item.href} target="_blank">
				<DockIcon {mouseX} {magnification} {distance}>
					<Tooltip.Root>
						<Tooltip.Trigger class="rounded-full transition-all duration-200 hover:bg-zinc-900/80">
							<img src={item.icon} alt={item.label} class="m-3 h-5 w-5 invert" />
						</Tooltip.Trigger>
						<Tooltip.Content sideOffset={9}>
							<p>{item.label}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</DockIcon>
			</a>
		{/each}
	</Dock>
</aside>
