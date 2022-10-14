<script>
  import { isOpen } from './pages'

  import Nav from './Nav.svelte'
  import Hamburger from './Hamburger.svelte'

  const BREAKPOINT = 600

  let innerWidth

  const closeNav = () => ($isOpen = false)
  const toggleNav = () => ($isOpen = !$isOpen)
  const scrollToTop = () => scrollTo(0, 0)

  $: innerWidth > BREAKPOINT && closeNav()
  $: !$isOpen && scrollToTop()
</script>

<svelte:window bind:innerWidth />

<header class:isOpen={$isOpen}>
  <div>
    <Nav on:click={closeNav} />
    <Hamburger on:click={toggleNav} />
  </div>
</header>

<style>
  header {
    padding-block: 2rem;
    background-color: var(--background, var(--black));
    color: var(--color);
  }
  header.isOpen {
    position: fixed;
    width: 100%;
    min-height: 100vh;
  }
  div {
    display: flex;
    justify-content: space-between;
    max-width: var(--width, 100%);
    margin-inline: auto;
    padding-inline: 3rem;
  }
  @media screen and (max-width: 600px) {
    div {
      padding-inline: 2rem;
    }
  }
</style>
