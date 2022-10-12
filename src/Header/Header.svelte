<script>
  import Nav from './Nav.svelte'
  import Hamburger from './Hamburger.svelte'

  let innerWidth
  let isOpen = false

  const toggleIsOpen = () => (isOpen = !isOpen)

  $: !isOpen && scrollTo(0, 0)
  $: innerWidth > 600 && (isOpen = false)
</script>

<svelte:window bind:innerWidth />

<header class:isOpen>
  <div>
    <Nav {isOpen} on:click={() => (isOpen = false)} />
    <Hamburger {isOpen} on:click={toggleIsOpen} />
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
