import { writable } from 'svelte/store'

export const posts = writable([])
export const error = writable('')
export const index = writable(null)

export const URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/posts?per_page=16&_embed'
