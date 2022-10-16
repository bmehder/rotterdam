<script>
  import { posts, index, error } from './store'
  import { tick } from 'svelte'

  import Spinner from './Spinner.svelte'
  import Card from './Card.svelte'
  import Error from './Error.svelte'

  let post, lastScrollY

  const showSinglePost = _index => {
    lastScrollY = window.pageYOffset
    $index = _index
  }

  const showAllPosts = async () => {
    $index = null
    await tick()
    setTimeout(() => scrollTo({ top: lastScrollY }), 100)
  }

  const handleKeydown = evt => {
    if (evt.key === 'ArrowLeft' || evt.key === 'Escape') {
      showAllPosts()
    }
  }

  $: isSinglePost = $index != undefined
  $: isShowAll = $index == undefined

  $: post = $posts[$index]
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
  {#if isSinglePost}
    <Card {isSinglePost} {post} on:click={showAllPosts} />
  {/if}

  {#if isShowAll}
    {#each $posts as post, index}
      <div>
        <Card {post} on:click={() => showSinglePost(index)} />
      </div>
    {:else}
      <Spinner />
    {/each}
  {/if}

  {#if $error}
    <Error error={$error} --color="white" />
  {/if}
</main>

<style>
  main {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
    gap: 3rem;
    padding: 1rem 0;
    background-color: unset;
    border: none;
    box-shadow: none;
  }
</style>
