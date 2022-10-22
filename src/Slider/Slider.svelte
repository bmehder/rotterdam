<script>
  import LeftArrow from './LeftArrow.svelte'
  import PausePlay from './PausePlay.svelte'
  import RightArrow from './RightArrow.svelte'

  export let slides = []
  export let duration = 6000

  let container
  let innerWidth
  let intervalId = null
  let autoplay = true
  let last = 0

  const stopAutoPlay = () => clearInterval(intervalId)

  const startAutoPlay = (node, autoplay) => {
    const play = () => (intervalId = setInterval(() => moveSlides(), duration))

    autoplay ? play() : stopAutoPlay()

    return {
      update(changedAutoPlay) {
        changedAutoPlay ? play() : stopAutoPlay()
      },
      destroy() {
        stopAutoPlay()
      },
    }
  }

  const reset = () => {
    container.scrollTo({ left: 0, behavior: 'smooth' })
    last = 0
  }

  const moveSlides = direction => {
    const scrollLeftOptions = { left: -innerWidth, behavior: 'smooth' }
    const scrollRightOptions = { left: innerWidth, behavior: 'smooth' }
    const containerWidth = innerWidth * slides.length
    const isBack = direction === 'Back'
    const scrollToOptions = isBack ? scrollLeftOptions : scrollRightOptions

    const setLastXPosition = () => {
      last = isBack
        ? container.scrollLeft - innerWidth
        : container.scrollLeft + innerWidth

      last < 0 && (last = 0)

      last > containerWidth && (last = containerWidth)

      last === innerWidth * slides.length && reset()
    }

    container.scrollBy(scrollToOptions)
    setLastXPosition()
  }

  const handleKeydown = evt => {
    evt.key === 'ArrowLeft' && moveSlides('Back')
    evt.key === 'ArrowRight' && moveSlides('Forward')
  }
</script>

<svelte:window bind:innerWidth on:keydown={handleKeydown} />

<aside use:startAutoPlay={autoplay} on:focus>
  <PausePlay on:click={() => (autoplay = !autoplay)} bind:autoplay />
  <div bind:this={container}>
    {#each slides as { src, text, options: { top, left } }}
      <article>
        <img {src} alt />
        <h2 style="top: {top}; left: {left};">
          <span>{text}</span>
        </h2>
      </article>
    {/each}
  </div>
  <LeftArrow on:click={() => moveSlides('Back')} />
  <RightArrow on:click={() => moveSlides('Forward')} />
</aside>

<style>
  aside {
    position: relative;
  }
  div {
    position: relative;
    width: 100%;
    height: var(--height, 70vh);
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  img {
    min-width: 100%;
    height: 100%;
    display: block;
    scroll-snap-align: start;
    object-fit: cover;
  }
  article {
    position: relative;
    min-width: 100%;
  }
  h2 {
    position: absolute;
    /* top: 50%;
    left: 50%; */
    margin: 0;
    color: var(--dark);
    font-size: 10vw;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  span {
    background: linear-gradient(
      to right,
      var(--dark),
      var(--medium),
      var(--light),
      var(--dark)
    );
    background-size: 200%;
    white-space: nowrap;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: background-pan 8s linear infinite;
  }
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    to {
      background-position: -200% center;
    }
  }
  @media screen and (max-width: 768px) {
    div {
      height: 100vh;
    }
  }
</style>
