<script>
  import Projet from "$lib/components/Projet.svelte";
    export let data;
</script>

<h1 class="text-2xl font-bold mb-4">Projets</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.projets as projet}
    <Projet {projet}/>
    {/each}
</div>
