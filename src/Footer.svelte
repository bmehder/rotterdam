<script>
  const date = new Date().getFullYear()
</script>

<footer>
  <div>
    <p>Copyright © {date} Tom Foolery. All rights reserved.</p>
  </div>
</footer>

<style>
  footer {
    padding-block: 2rem;
    background-color: var(--background, var(--black));
    color: var(--color, var(--white));
  }
  div {
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
