<script>
  import { images } from './data'

  import LeftArrow from './LeftArrow.svelte'
  import PausePlay from './PausePlay.svelte'
  import RightArrow from './RightArrow.svelte'

  export let duration = 8000
  export let autoplay = true

  let container
  let innerWidth
  let intervalId
  let last = 0

  const startAutoPlay = autoplay => {
    if (autoplay) {
      intervalId = setInterval(() => handleClick(), duration)
    } else {
      stopAutoPlay()
    }
    return {
      update(changedAutoPlay) {
        if (changedAutoPlay) {
          intervalId = setInterval(() => handleClick(), duration)
        } else {
          stopAutoPlay()
        }
      },
      destroy() {
        stopAutoPlay()
      },
    }
  }

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
</script>

<svelte:window bind:innerWidth on:keydown={handleKeydown} />

<!-- on:mouseover={handleMouseover}
  on:mouseleave={handleMouseleave} -->
<aside use:startAutoPlay={autoplay} on:focus>
  <PausePlay on:click={() => (autoplay = !autoplay)} bind:autoplay />
  <div bind:this={container}>
    {#each images as { src, text }}
      <article>
        <img {src} alt />
        <h2>
          <span>{text}</span>
        </h2>
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
    top: 50%;
    left: 50%;
    margin: 0;
    color: var(--dark);
    font-size: 10vw;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  span {
    /* --purple: rgb(123, 31, 162);
    --violet: rgb(103, 58, 183);
    --pink: rgb(244, 143, 177); */
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
