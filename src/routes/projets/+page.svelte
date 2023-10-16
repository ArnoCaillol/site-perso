<script>
  import Projet from "$lib/components/Projet.svelte";
  export let data;
</script>
<div class="prose lg:prose-lg mb-4 p-4">
  <h1>Projets</h1>
	<p class="text-gray-500">Some description or content for the header section can go here.</p>
</div>
<div class="flex flex-col md:flex-row h-full md:h-auto p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  {#each data.projets as projet}
  <Projet {projet}/>
  {/each}
</div>