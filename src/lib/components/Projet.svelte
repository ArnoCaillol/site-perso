<script>
  export let projet;
  const loaded = new Map();
  
  function lazy(node, data) {
    if (loaded.has(data.src)) {
      node.setAttribute('src', data.src);
    } else {
      const img = new Image();
      img.src = data.src;
      img.onload = () => {
        loaded.set(data.src, img);
        node.setAttribute('src', data.src);
        node.parentNode.childNodes[2]?.classList.add('hidden');
      };
    }
    
    return {
      destroy(){} // noop
    };
  }
  
  function initViewTransition(e){
    e.target.style.viewTransitionName = 'titre-projet'
  }
</script>
<a class="projet" href="{projet.path}" on:click={initViewTransition}>
  <div class="card card-bordered bg-base-300">
    <figure class="bg-base-200">
      {#if projet && projet.meta && projet.meta.images && projet.meta.images.length}
      <img src="/assets/placeholder.webp" loading="lazy" use:lazy="{{src: projet.meta.images[0]}}" alt={projet.meta.title}>
      <span class="loading loading-spinner loading-lg"></span>
      {:else}
      <div class="skeleton w-full h-full"></div>
      {/if}
    </figure>
    <div class="card-body flex items-center">
      <h2 class="card-title">{projet.meta.title}</h2>
    </div>
  </div>
</a>

<style>
  .card {
    transition: .5s;
    width: 21rem;
  }
  
  .card:hover {
    scale: 1.02;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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