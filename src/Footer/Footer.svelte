<script>
  import BackToTop from '../BackToTop.svelte'

  const date = new Date().getFullYear()
</script>

<footer>
  <div>
    <p>Copyright © {date} Tom Foolery. All rights reserved.</p>

    <BackToTop --color="var(--white)" />
  </div>
</footer>

<style>
  footer {
    background-color: var(--background, var(--black));
    color: var(--color, var(--white));
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
    max-width: var(--width, 100%);
    margin-inline: auto;
    padding-inline: 1rem;
  }
  @media screen and (max-width: 600px) {
    div {
      padding-inline: 2rem;
    }
  }
</style>
