<script>
  export let projet;

  let src = '/assets/placeholder.jpg';
  let hidden = '';
  if (projet && projet.meta && projet.meta.images && projet.meta.images.length) {
    src = projet.meta.images[0];
  }
  
  hidden = 'hidden';

  function initViewTransition(e){
    e.target.style.viewTransitionName = 'titre-projet'
  }
</script>
<a class="projet" href="{projet.path}" on:click={initViewTransition}>
  <div class="card card-bordered bg-base-300">
    <figure>
      <img {src} alt={projet.meta.title}>
      <span class="loading loading-spinner loading-lg {hidden}"></span>
    </figure>
    <div class="card-body flex items-center">
      <h2 class="card-title">{projet.meta.title}</h2>
    </div>
  </div>
</a>

<style>
  .card {
    transition: .5s;
    max-width: 30rem;
  }
  
  .card:hover {
    scale: 1.02;
  }
  
  img {
    width: 100%;
  }
  
  figure {
    position: relative; /* Added this line to give figure relative positioning */
    height: 10rem;
    overflow: hidden;
  }
  
  .projet {
    transition: opacity 0.3s, transform 0.3s;
    opacity: 1;
    transform: translateX(0);
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* This centers the spinner */
  }
</style>