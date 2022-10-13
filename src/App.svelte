<script>
  import { pages, pageNumber } from './Header/pages'

  import Header from './Header/Header.svelte'
  import Home from './Home.svelte'
  import About from './About.svelte'
  import Blog from './Blog/Blog.svelte'
  import Services from './Services.svelte'
  import Contact from './Contact.svelte'
  import Footer from './Footer/Footer.svelte'

  const pageComponents = [Home, About, Blog, Services, Contact]
</script>

<Header --background="var(--black)" --color="var(--white)" --width="1100px" />

<div class="container">
  {#each pages as page, i}
    {#if pages[$pageNumber] === page}
      <svelte:component this={pageComponents[i]} />
    {/if}
  {/each}
</div>

<Footer --background="var(--black)" --color="var(--white)" --width="1100px" />

<style>
  .container {
    width: 100%;
    max-width: 1100px;
    margin-inline: auto;
  }
</style>
