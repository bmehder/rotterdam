<script>
  import { isOpen } from './pages'
</script>

{#if $isOpen}
  <i class="fa-solid fa-2x fa-x" on:click on:keypress />
{:else}
  <i class="fa fa-2x fa-bars" on:click on:keypress />
{/if}

<style>
  i {
    display: none;
  }
  @media screen and (max-width: 600px) {
    i {
      display: block;
    }
  }
</style>
