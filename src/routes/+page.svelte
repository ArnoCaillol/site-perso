<script>
  import Projet from "$lib/components/Projet.svelte";
  import TimelineItem from "$lib/components/TimelineItem.svelte";
  
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
    <img src="/images/logo.png" class="rounded-lg shadow-2xl" />
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

<section class="flex flex-col flex-wrap justify-center content-center h-screen">
  <div class="prose prose-lg my-8 text-center max-w-full">
    <h2 class="text-3xl">Une question ?</h2>
  </div>
  <div class=" space-x-4">
    <a href="/contact" class="btn btn-primary">Contactez moi !</a>
    <a href="/projets" class="btn btn-secondary">Mes projets</a>
  </div>
</section>

<style>
  ul {
    list-style-type: none;
  }
</style>