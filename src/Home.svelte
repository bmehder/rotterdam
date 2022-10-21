<h1>Rotterdam Theme</h1>
<h2>A single page app (SPA) built with Svelte components.</h2>
<main>
  <div>
    <img src="img/plant.png" alt="" />
    <h3>Plant 1</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur
      adipisicing elit.
    </p>
  </div>

  <div>
    <img src="img/plant2.png" alt="" />
    <h3>Plant 2</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur
      adipisicing elit.
    </p>
  </div>

  <div>
    <img src="img/plant3.png" alt="" />
    <h3>Plant 3</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur
      adipisicing elit.
    </p>
  </div>
</main>

<style>
  h1 {
    margin-top: 3rem;
    text-align: center;
  }
  h1 {
    color: var(--white);
  }
  h2 {
    color: unset;
    text-align: center;
  }
  main {
    display: grid;
    max-width: none;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    gap: 3rem;
    margin-top: 0;
    margin-bottom: 2rem;
    background: none;
    border: none;
    box-shadow: none;
  }
  div {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    opacity: 0.9;
    aspect-ratio: 4/3;
  }
  h3 {
    margin: 2rem 2rem 1rem;
    color: var(--white);
  }
  p {
    margin: 0rem 2rem 2rem;
  }
</style>
