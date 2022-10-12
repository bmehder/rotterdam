<script>
  import Header from './Header/Header.svelte'
  import Blog from './Blog/Blog.svelte'
  import Footer from './Footer/Footer.svelte'
</script>

<Header --background="var(--black)" --color="var(--white)" --width="1100px" />

<div class="container">
  <Blog />
</div>

<Footer --background="var(--black)" --color="var(--white)" --width="1100px" />

<style>
  .container {
    width: 100%;
    max-width: 1100px;
    margin-inline: auto;
  }
</style>
