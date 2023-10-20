<script>
  import Projet from "$lib/components/Projet.svelte";
  export let data;
</script>

<svelte:head>
<title>Arnaud Caillol - Projets</title>
<meta property="og:title" content="Arnaud Caillol - Projets" />
</svelte:head>

<div class="flex flex-col items-center">
  <div class="prose lg:prose-lg text-center w-full mb-4 p-4">
    <h1>Projets</h1>
    <p class="text-gray-500">Some description or content for the header section can go here.</p>
  </div>
  <div class="h-full md:h-auto p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
    {#each data.projets as projet}
    <Projet {projet}/>
    {/each}
  </div>
</div>