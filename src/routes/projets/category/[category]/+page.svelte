<script>
    import Projet from "$lib/components/Projet.svelte";
    export let data;
</script>

<svelte:head>
<title>Arnaud Caillol - {data.category}</title>
<meta property="og:title" content="Arnaud Caillol - {data.category}" />
</svelte:head>

<div class="flex flex-col items-center">
    <div class="prose lg:prose-lg text-center w-full mb-4 p-4">
        <div class="flex justify-center space-x-2">
            <a href="/projets" class="btn btn-primary bg-[#05d797] back">❮</a>
            <h1>{data.category}</h1>    
        </div>
    </div>
    {#if data.projets && data.projets.length > 0}
    {#each data.projets as projet}
    <div class="h-full md:h-auto p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Projet {projet}/>
    </div>
    {/each}
    {:else}
    <p>Désolé, aucun projet dans cette catégorie !</p>
    {/if}
</div>

<style>
    @keyframes initialSkew {
        0% {
            transform: skewX(0deg);
        }
        100% {
            transform: skewX(-10deg);
        }
    }
    
    .back {
        aspect-ratio: 1;
        border-radius: 2px;
        animation: initialSkew 500ms forwards;
    }
    
    .back>span {
        display: none;
    }
    
    .back:hover {
        animation: initialSkew;
        animation-direction: reverse;
    }
    
    .back:hover span{
        display: inline-block;
    }
</style>