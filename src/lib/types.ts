export type Categories = 'sveltekit' | 'svelte' | 'webdev' | 'javascript' | 'typescript' | 'opensource'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}