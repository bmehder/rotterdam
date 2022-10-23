<script>
  import { slides } from '../public/data.js'

  import { pages, pageNumber, pageComponents } from './Header/store'

  import Slider from './Slider/Slider.svelte'
  import Header from './Header/Header.svelte'
  import Footer from './Footer/Footer.svelte'
</script>

<Header --background="var(--black)" --color="var(--white)" --width="1100px" />

{#if $pageNumber === 0}
  <Slider {slides} duration="6000" --height="70vh" />
{/if}
<div class="container">
  <svelte:component this={pageComponents.get(pages[$pageNumber])} />
</div>

<Footer --background="var(--black)" --color="var(--white)" --width="1100px" />

<style>
  .container {
    width: 100%;
    max-width: 1100px;
    margin-inline: auto;
    padding-inline: 1rem;
  }
</style>
