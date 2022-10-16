import { writable } from 'svelte/store'

export const posts = writable([])
export const error = writable('')
export const index = writable(null)

export const URL =
  'https://sprucehealthgroup.com/wp-json/wp/v2/posts?per_page=16&_embed'

fetch(URL)
  .then(res => res.json())
  .then(data => (Array.isArray(data) && posts.set(data)) || error.set(data.message))
  .catch(error => console.log(error.message))
  .finally(() => console.log('Fetch complete'))
