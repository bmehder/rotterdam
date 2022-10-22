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

const ensureIntersectionObserver = options => {
  if (intersectionObserver) return

  intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
      entry.target.dispatchEvent(new CustomEvent(eventName))
    })
  }, options)
}

export const viewport = (element, options) => {
  ensureIntersectionObserver(options)

  intersectionObserver.observe(element)

  return {
    update(newOptions) {
      options = newOptions
    },

    destroy() {
      intersectionObserver.unobserve(element)
    },
  }
}
