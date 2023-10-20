<script>
  export let projet;
  
  function initViewTransition(e){
    e.target.style.viewTransitionName = 'titre-projet'
  }
</script>
<a class="projet" href="{projet.path}" on:click={initViewTransition}>
  <div class="card card-bordered bg-base-300 shadow-md hover:shadow-xl">
    <figure>
      <img src="https://picsum.photos/500/200" alt=''>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{projet.meta.title}</h2>
      <time>{projet.meta.date}</time>
      <p>{projet.meta.caption}</p>
    </div>
  </div>
</a>

<style>
  .card {
    transition: .5s;
  }
  
  .card:hover {
    scale: 1.02;
  }
  
  img {
    width: 100%;
  }
  
  figure {
    max-height: 10rem;
    overflow: hidden;
  }
  
  .projet {
    transition: opacity 0.3s, transform 0.3s;
    opacity: 1;
    transform: translateX(0);
  }
</style>