<script>
    export let projet;
  
  function initViewTransition(e){
    e.target.style.viewTransitionName = 'titre-projet'
  }
</script>
<a href="{projet.path}" on:click={initViewTransition}>
  <div class="card bordered">
    <figure>
      <img src="https://picsum.photos/500/200">
    </figure>
    <div class="card-body">
      <h2 class="card-title">{projet.meta.title}</h2>
      <p>{projet.meta.date}</p>
      <p>{projet.meta.caption}</p>
    </div>
  </div>
</a>

<style>
  .card {
    background-color: #34393f;
    transition: .5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Initial shadow */
  }

  .card:hover {
    scale: 1.01;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Shadow on hover */
  }

  img {
    width: 100%;
  }

  figure {
    max-height: 10rem;
    overflow: hidden;
  }
</style>