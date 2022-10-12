<script>
  import { tick } from 'svelte'
  import { posts, index, error, lastScrollY } from './store'

  import Header from './Header/Header.svelte'
  import Footer from './Footer/Footer.svelte'
  import Spinner from './Spinner.svelte'
  import Card from './Card.svelte'
  import Error from './Error.svelte'

  const handleShowSingle = i => {
    $lastScrollY = window.pageYOffset
    $index = i
  }

  const handleShowAll = async () => {
    $index = null
    await tick()
    scrollTo({
      top: $lastScrollY,
      left: 0,
    })
  }

  $: isShowSingle = $index != undefined
  $: isShowAll = $index == undefined
</script>

<Header --background="var(--black)" --color="rgba(255, 255, 255, 0.8)" --width="1100px" />

<div>
  <main>
    {#if isShowSingle}
      <Card post={$posts[$index]} isSingle={true} on:click={() => handleShowAll()} />
    {/if}

    {#if isShowAll}
      {#each $posts as post, i}
        <Card {post} on:click={() => handleShowSingle(i)} />
      {:else}
        <Spinner />
      {/each}
    {/if}
  </main>
</div>

{#if $error}
  <Error --color="white" />
{/if}

<Footer --background="var(--black)" --color="rgba(255, 255, 255, 0.8)" --width="1100px" />

<style>
  :global(:root) {
    --dark: #8a2387;
    --medium: #e94057;
    --light: #f27121;
    --black: #222;
    --white: #fff;
  }
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(body) {
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 0;
    background-image: linear-gradient(320deg, var(--light), var(--medium), var(--dark));
    background-attachment: fixed;
  }
  div {
    width: 100%;
    max-width: 1100px;
    margin-inline: auto;
  }
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    padding: 3rem;
  }
  @media screen and (max-width: 600px) {
    main {
      padding: 3rem;
    }
  }
</style>
