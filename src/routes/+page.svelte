<script>
  import Projet from "$lib/components/Projet.svelte";
  import TimelineItem from "$lib/components/TimelineItem.svelte";
  import logo from '$lib/assets/logo.png';
  import laptop from '$lib/assets/laptop.jpg';
  
  export let data;
</script>
<section class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="{logo}" class="rounded-lg shadow-2xl" alt="Arnaud Caillol"/>
    <div>
      <h1 class="text-5xl font-bold">Bonjour !</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</section>
<section id="projets">
  <div class="prose lg:prose-lg my-8 text-center max-w-full">
    <h2 class="text-3xl">Mes projets</h2>
    <p>Some description or content for the header section can go here.</p>
  </div>
  <!-- Cards Section -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
    {#each data.projets as projet}
    <Projet {projet}/>
    {/each}
  </div>
</section>
<section id="experiences">
  <div class="prose prose-lg my-8 text-center max-w-full">
    <h2 class="text-3xl">Expériences</h2>
  </div>
  <ul class="relative m-8 border-l border-gray-200 dark:border-gray-700"> 
    {#each data.experiences as experience}
    <TimelineItem {experience}/>
    {/each}
    <li class="mb-10 ml-6">
      <div class="absolute w-3 h-3 timeline-start bg-gray-200 dark:bg-gray-700"></div>
    </li>
  </ul>
</section>

<section id="cta" class="flex flex-col flex-wrap justify-center content-center rounded-xl h-screen">
  <img src="{laptop}" alt="">
  <div class="card bg-base-100 p-8">
    <div class="prose prose-lg mb-8 text-center max-w-full">
      <h2 class="text-3xl">Une question ?</h2>
    </div>
    <div class=" space-x-4">
      <a href="/contact" class="btn btn-primary">Contactez moi !</a>
      <a href="/projets" class="btn btn-secondary">Mes projets</a>
    </div>
  </div>
</section>

<style>
  section {
    margin-bottom: 5rem;
  }
  
  ul {
    list-style-type: none;
  }

  .timeline-start {
    width: 1rem;
    height: 1rem;
    left: -.5rem;
    border-radius: 100%;
    z-index: 1;
  }
  
  #cta{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  #cta>img { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(3px) grayscale(70%);
    z-index: -1;
  }
  
  #cta .card {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    transform: perspective(1000px);
  }
</style>