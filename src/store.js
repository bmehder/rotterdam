import { writable } from 'svelte/store'

export const posts = writable([])
export const index = writable(null)
export const error = writable('')
export const lastScrollY = writable(0)

const URL = 'https://restorefirsthealth.com/wp-json/wp/v2/posts?per_page=32&_embed'

fetch(URL)
  .then(res => res.json())
  .then(data => (Array.isArray(data) && posts.set(data)) || error.set(data.message))
  .catch(error => console.log(error))
  .finally(() => console.log('Data Fetched'))
