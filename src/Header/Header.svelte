<script>
  import Nav from './Nav.svelte'
  import Hamburger from './Hamburger.svelte'

  const BREAKPOINT = 600

  let innerWidth
  let isOpen = false

  const closeNav = () => (isOpen = false)
  const toggleNav = () => (isOpen = !isOpen)

  $: innerWidth > BREAKPOINT && closeNav()
  $: !isOpen && scrollTo(0, 0)
</script>

<svelte:window bind:innerWidth />

<header class:isOpen>
  <div>
    <Nav bind:isOpen on:click={closeNav} />
    <Hamburger {isOpen} on:click={toggleNav} />
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
