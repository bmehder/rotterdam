<script>
  import { URL, posts, index, error } from './store'
  import { tick } from 'svelte'

  import Spinner from './Spinner.svelte'
  import Card from './Card.svelte'
  import Error from './Error.svelte'

  $posts.length === 0 &&
    fetch(URL)
      .then(res => res.json())
      .then(data => (Array.isArray(data) && posts.set(data)) || error.set(data.message))
      .catch(error => console.log(error.message))
      .finally(() => console.log('Fetch complete'))

  let lastScrollY

  const showSinglePost = _index => {
    lastScrollY = window.pageYOffset
    $index = _index
  }

  const showAllPosts = async () => {
    $index = null
    await tick()
    scrollTo({ top: lastScrollY })
  }

  $: isSinglePost = $index != undefined
  $: isShowAll = !isSinglePost
  $: post = $posts[$index]
</script>

<main>
  {#if isSinglePost}
    <Card {isSinglePost} {post} on:click={() => showAllPosts()} />
  {/if}

  {#if isShowAll}
    {#each $posts as post, index}
      <Card {post} on:click={() => showSinglePost(index)} />
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
    padding-block: 1rem;
    padding-inline: 0;
    background-color: unset;
    border: none;
    box-shadow: none;
  }
</style>
