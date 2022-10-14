<script>
  import { pages, pageNumber, isOpen, lastPageNumber } from './store'

  export const handleClick = index => {
    $lastPageNumber = $pageNumber
    $pageNumber = index
    $isOpen = false
  }
</script>

<nav class:isOpen={$isOpen}>
  <h1 on:click={() => handleClick(0)} on:keypress>Logo</h1>
  <ul>
    {#each pages as page, index}
      <li
        class:active={index === $pageNumber}
        on:click={() => handleClick(index)}
        on:keypress
      >
        {page}
      </li>
    {/each}
  </ul>
</nav>

<style>
  h1 {
    margin-right: auto;
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    padding-inline: 0;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    text-decoration: underline;
  }
  li.active {
    color: var(--light);
  }
  @media screen and (max-width: 600px) {
    nav {
      flex-direction: column;
      gap: 3rem;
    }
    ul {
      display: none;
    }
    .isOpen ul {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .isOpen li {
      padding-bottom: 1rem;
      border-bottom: 2px solid white;
    }
  }
</style>
