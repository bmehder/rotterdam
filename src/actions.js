// Click Outside
export const clickOutside = (element, callbackFunction) => {
  const handleClick = evt => !element.contains(evt.target) && callbackFunction()

  document.body.addEventListener('click', handleClick, { capture: true })

  return {
    update(newCallbackFunction) {
      callbackFunction = newCallbackFunction
    },
    destroy() {
      document.body.removeEventListener('click', handleClick)
    },
  }
}

// Viewport
let intersectionObserver

const ensureIntersectionObserver = params => {
  if (intersectionObserver) return

  intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
      entry.target.dispatchEvent(new CustomEvent(eventName))
    })
  }, params)
}

export const viewport = (element, params) => {
  ensureIntersectionObserver(params)

  intersectionObserver.observe(element)

  return {
    update(newParams) {
      params = newParams
    },

    destroy() {
      intersectionObserver.unobserve(element)
    },
  }
}
