<script>
  import { images } from './data'

  import LeftArrow from './LeftArrow.svelte'
  import RightArrow from './RightArrow.svelte'

  const DURATION = 5000

  let container,
    innerWidth,
    intervalId,
    last = 0

  const startAutoPlay = () =>
    (intervalId = setInterval(() => handleClick(), DURATION))

  const stopAutoPlay = () => clearInterval(intervalId)

  const reset = () => {
    stopAutoPlay()
    container.scrollTo({ left: 0, behavior: 'smooth' })
    last = 0
    startAutoPlay()
  }

  const handleClick = direction => {
    const scrollLeft = { left: last - innerWidth, behavior: 'smooth' }
    const scrollRight = { left: innerWidth + last, behavior: 'smooth' }
    const containerWidth = innerWidth * images.length
    const isBack = direction === 'Back'

    container.scrollTo(isBack ? scrollLeft : scrollRight)

    last = isBack
      ? container.scrollLeft - innerWidth
      : container.scrollLeft + innerWidth

    last < 0 && (last = 0)

    last > containerWidth && (last = containerWidth)
  }

  const handleKeydown = evt => {
    evt.key === 'ArrowLeft' && handleClick('Back')
    evt.key === 'ArrowRight' && handleClick('Forward')
  }

  const handleMouseover = () => stopAutoPlay()

  const handleMouseleave = () => startAutoPlay()

  $: last === innerWidth * images.length && reset()

  // 	$: console.log(last)
</script>

<svelte:window bind:innerWidth on:keydown={handleKeydown} />

<!-- on:mouseover={handleMouseover}
  on:mouseleave={handleMouseleave} -->
<aside use:startAutoPlay on:focus>
  <div bind:this={container}>
    {#each images as { src, text }}
      <article>
        <img {src} alt />
        <h2>{text}</h2>
      </article>
    {/each}
  </div>
  <LeftArrow on:click={() => handleClick('Back')} />
  <RightArrow on:click={() => handleClick('Forward')} />
</aside>

<style>
  :global(body) {
    padding: 0;
  }
  aside {
    position: relative;
  }
  div {
    position: relative;
    width: 100%;
    height: 90vh;
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
    top: 50%;
    left: 50%;
    margin: 0;
    color: var(--dark);
    font-size: 3rem;
    text-align: center;
    transform: translate(-50%, -50%);
  }
</style>
