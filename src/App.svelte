<script>
  import { fly } from 'svelte/transition'
  import { pages, pageNumber } from './Header/pages'

  import Header from './Header/Header.svelte'
  import Home from './Home.svelte'
  import About from './About.svelte'
  import Blog from './Blog/Blog.svelte'
  import Services from './Services.svelte'
  import Contact from './Contact.svelte'
  import Footer from './Footer/Footer.svelte'

  const pageComponents = [Home, About, Blog, Services, Contact]
  const transitionInLeft = { delay: 600, duration: 400, x: 1500 }
  const transitionOutLeft = { duration: 400, x: -1500 }
</script>

<Header --background="var(--black)" --color="var(--white)" --width="1100px" />

{#key $pageNumber}
  <div class="container">
    {#each pages as page, i}
      {#if pages[$pageNumber] === page}
        <div in:fly={transitionInLeft} out:fly={transitionOutLeft}>
          <svelte:component this={pageComponents[i]} />
        </div>
      {/if}
    {/each}
  </div>
{/key}

<Footer --background="var(--black)" --color="var(--white)" --width="1100px" />

<style>
  .container {
    width: 100%;
    max-width: 1100px;
    margin-inline: auto;
    padding-inline: 1rem;
  }
</style>
