<script>
  import Projet from "$lib/components/Projet.svelte";
  import TimelineItem from "$lib/components/TimelineItem.svelte";
  import logo from '$lib/assets/logo.png';
  import laptop from '$lib/assets/laptop.jpg';
  
  export let data;
  data.experiences = [
  {
    meta: {
      title: 'E-Commerce UI code in Tailwind CSS',
      date: 'April 2022',
      caption: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.'
    }
  },
  {
    meta: {
      title: 'Marketing UI design in Figma',
      date: 'March 2022',
      caption: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.'
    }
  }
  ]
</script>
<section class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="{logo}" class="rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Bonjour !</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
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
  </ul>
</section>

<section id="cta" class="flex flex-col flex-wrap justify-center content-center rounded-xl h-screen">
  <img src="{laptop}">
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
  
  #cta{
    position: relative;
    width: 100%; /* Set the width and height as needed */
    overflow: hidden;
  }
  
  #cta>img { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(3px) grayscale(70%);
    z-index: -1;
  }
  
  #cta .card {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    transform: perspective(1000px);
  }
</style>