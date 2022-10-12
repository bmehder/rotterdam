<script>
  import { index } from './store'

  export let isSingle = false
  export let post

  const title = post.title.rendered
  const excerpt = post.excerpt.rendered.split(' ').slice(0, 25).join(' ')
  const content = post.content.rendered
  const mediaSizes = post._embedded['wp:featuredmedia']['0']?.media_details.sizes
  const mediumImage = mediaSizes.midrange_square?.source_url
  const largeImage = mediaSizes.large?.source_url
  const fullImage = mediaSizes.full?.source_url

  isSingle &&
    scrollTo({
      top: 0,
      left: 0,
    })
</script>

<article class:single={isSingle}>
  {#if isSingle}
    <button on:click>&laquo; All Posts</button>
    <h2>{@html title}</h2>
    <div>{@html content}</div>
    <button on:click>&laquo; All Posts</button>
  {/if}

  {#if !isSingle}
    <div class="outer">
      {#if mediumImage}
        <img loading="lazy" src={mediumImage} alt={title} on:click on:keydown />
      {:else}
        <img loading="lazy" src={fullImage} alt={title} on:click on:keydown />
      {/if}
      <div class="inner">
        <h2 on:click on:keydown>{@html title}</h2>
        <div>{@html excerpt}</div>
      </div>
    </div>
    <button on:click>Read More &raquo;</button>
  {/if}
</article>

<style>
  article {
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    align-items: start;
  }
  div.inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h2 {
    color: var(--dark);
  }
  :not(.single) h2:hover {
    text-decoration: underline;
  }
  img {
    aspect-ratio: 1;
  }
  :not(.single) h2,
  img {
    cursor: pointer;
  }
  button {
    padding-block: 1rem;
    padding-inline: 1rem;
    background-color: var(--dark);
    color: white;
    cursor: pointer;
  }
  :global(img) {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  article :global(p),
  article :global(li) {
    line-height: 1.5rem;
  }
  article :global(p:not(:first-child)),
  article :global(ul),
  article :global(h2) {
    margin-top: 1.5rem;
    padding: 0;
  }
  article :global(figure) {
    margin: 0;
  }
  @media screen and (max-width: 400px) {
    article {
      padding-block: 2rem;
      padding-inline: 1rem;
    }
  }
</style>
