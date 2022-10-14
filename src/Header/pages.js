import { writable } from 'svelte/store'

export const pages = ['Home', 'About', 'Blog', 'Services', 'Contact']

export const pageNumber = writable(0)
export const isOpen = writable(false)
export const lastPageNumber = writable(null)
