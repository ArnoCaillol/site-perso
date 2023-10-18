<script>
  export let projet;
  
  function initViewTransition(e){
    e.target.style.viewTransitionName = 'titre-projet'
  }
</script>
<a href="{projet.path}" on:click={initViewTransition}>
  <div class="card bordered bg-gray-200 dark:bg-gray-700">
    <figure>
      <img src="https://picsum.photos/500/200">
    </figure>
    <div class="card-body">
      <h2 class="card-title text-gray-900 dark:text-white">{projet.meta.title}</h2>
      <p class="text-gray-400 dark:text-gray-500">{projet.meta.date}</p>
      <p class="text-gray-500 dark:text-gray-400">{projet.meta.caption}</p>
    </div>
  </div>
</a>

<style>
  .card {
    transition: .5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Initial shadow */
  }
  
  .card:hover {
    scale: 1.02;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); /* Shadow on hover */
  }
  
  img {
    width: 100%;
  }
  
  figure {
    max-height: 10rem;
    overflow: hidden;
  }
</style>