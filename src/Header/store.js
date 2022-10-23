import { writable, derived } from 'svelte/store'

import Home from '../Home.svelte'
import About from '../About.svelte'
import Blog from '../Blog/Blog.svelte'
import Services from '../Services.svelte'
import Contact from '../Contact.svelte'

export const pageComponents = new Map([
  ['Home', Home],
  ['About', About],
  ['Blog', Blog],
  ['Services', Services],
  ['Contact', Contact],
])

export const pages = [...pageComponents].reduce((acc, [key]) => [...acc, key], [])

export const transitions = new Map([
  ['inLeft', { x: -1500, delay: 400 }],
  ['inRight', { x: 1500, delay: 400 }],
  ['outLeft', { x: 1500 }],
  ['outRight', { x: -1500 }],
])

export const { inLeft, inRight, outLeft, outRight } = Object.fromEntries(transitions)

export const isOpen = writable(false)

export const isShowBackToTop = writable(false)

export const pageNumber = writable(0)

export const lastPageNumber = writable(null)

export const isSwipeLeft = derived(
  [pageNumber, lastPageNumber],
  ([pageNumber, lastPageNumber]) => pageNumber - lastPageNumber > 0
)
