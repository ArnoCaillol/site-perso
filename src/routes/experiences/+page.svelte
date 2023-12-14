<script>
    import TimelineItem from "$lib/components/TimelineItem.svelte";
    export let data;
</script>


<svelte:head>
<title>Arnaud Caillol - Expériences</title>
<meta property="og:title" content="Arnaud Caillol - Expériences" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
</svelte:head>

<section class="py-20" id="experiences">
    <div class="prose prose-lg my-8 p-4 text-center mx-auto">
        <h1>Expériences</h1>
        <div class="card bg-base-200">
            <div class="card-body">
                <p class="text-center">Une liste qui ne demande qu'à grandir 🧑‍💼</p>
            </div>
        </div>
    </div>
    <ul class="relative m-8 border-l border-neutral-content"> 
        {#each data.experiences as experience}
        <TimelineItem {experience}/>
        {/each}
        <li class="mb-10 ml-6">
            <div class="absolute w-3 h-3 timeline-start bg-neutral-content"></div>
        </li>
    </ul>
</section>

<style>
    .timeline-start {
        width: 1rem;
        height: 1rem;
        left: -.55rem;
        border-radius: 100%;
        z-index: 1;
    }
    
    ul {
        list-style-type: none;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
    }
</style>