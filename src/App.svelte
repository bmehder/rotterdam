<script>
  import { fly } from 'svelte/transition'
  import { slides } from '../public/data.js'

  import {
    pages,
    pageNumber,
    isSwipeLeft,
    pageComponents,
    inLeft,
    inRight,
    outLeft,
    outRight,
  } from './Header/store'

  import Slider from './Slider/Slider.svelte'
  import Header from './Header/Header.svelte'
  import Footer from './Footer/Footer.svelte'
</script>

<Header --background="var(--black)" --color="var(--white)" --width="1100px" />

{#key $pageNumber}
  <div
    in:fly={$isSwipeLeft ? inRight : inLeft}
    out:fly={$isSwipeLeft ? outRight : outLeft}
  >
    {#if $pageNumber === 0}
      <Slider {slides} duration="3000" --height="70vh" />
    {/if}
    <div class="container">
      <svelte:component this={pageComponents.get(pages[$pageNumber])} />
    </div>
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
