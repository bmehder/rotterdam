<script>
  import BackToTop from './BackToTop.svelte'

  const date = new Date().getFullYear()

  const handleBackToTop = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
</script>

<footer>
  <div>
    <p>Copyright © {date} Tom Foolery. All rights reserved.</p>

    <BackToTop --color="rgba(255, 255, 255, 0.8)" on:click={handleBackToTop} />
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
    padding-inline: 3rem;
  }
  @media screen and (max-width: 600px) {
    div {
      padding-inline: 2rem;
    }
  }
</style>
