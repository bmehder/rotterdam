<script>
  import { fly } from 'svelte/transition'

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

  import Header from './Header/Header.svelte'
  import Footer from './Footer/Footer.svelte'
</script>

<Header --background="var(--black)" --color="var(--white)" --width="1100px" />

{#key $pageNumber}
  <div class="container">
    {#each pages as page}
      {#if pages[$pageNumber] === page}
        <div
          in:fly={$isSwipeLeft ? inRight : inLeft}
          out:fly={$isSwipeLeft ? outLeft : outRight}
        >
          <svelte:component this={pageComponents.get(page)} />
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
