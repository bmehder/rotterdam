<script>
  import { tick } from 'svelte'
  import { posts, index, error, lastScrollY } from './store'

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

{#if $error}
  <Error --color="white" />
{/if}

<style>
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    padding: 3rem;
  }
  @media screen and (max-width: 600px) {
    main {
      padding: 2rem;
    }
  }
</style>
