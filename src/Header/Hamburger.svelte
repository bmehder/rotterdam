<script>
  import { isOpen } from './store'
</script>

{#if $isOpen}
  <i class="fa-solid fa-2x fa-x" on:click on:keypress />
{:else}
  <i class="fa fa-2x fa-bars" on:click on:keypress />
{/if}

<style>
  @media screen and (min-width: 600px) {
    i {
      display: none;
    }
  }
</style>
