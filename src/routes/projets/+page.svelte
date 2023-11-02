<script>
  import Projet from "$lib/components/Projet.svelte";
  import slugify from 'slugify';
  
  const slugifyParams = { lower: true, remove: /[*+~.()'"!:@]/g };
  export let data;
</script>

<svelte:head>
<title>Arnaud Caillol - Projets</title>
<meta property="og:title" content="Arnaud Caillol - Projets" />
</svelte:head>

<div class="flex flex-col items-center">
  <div class="prose lg:prose-lg text-center w-full mb-4 p-4 space-x-2 space-y-2">
    <h1>Projets</h1>
    <div class="card bg-base-200">
      <div class="card-body">
        <small class="text-justify">Voici une liste de projets auxquels j'ai participé ! J'ai pris la peine de sélectionner les plus notables et ceux où ma participation a été importante 😉</small>
      </div>
    </div>
    {#each data.categories as category}
    <a href="/projets/category/{slugify(category, slugifyParams)}" class="btn">{category}</a>
    {/each}
  </div>
  <div class="h-full md:h-auto p-4 w-full grid justify-items-center	grid-cols-1 md:grid-cols-2 gap-8 mb-8">
    {#each data.projets as projet}
    <Projet {projet}/>
    {/each}
  </div>
</div>