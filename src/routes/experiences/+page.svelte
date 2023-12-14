<script>
    import TimelineItem from "$lib/components/TimelineItem.svelte";
    export let data;
</script>

<section class="p-20" id="experiences">
    <div class="prose prose-lg my-8 text-center max-w-full">
        <h1>Expériences</h1>
        <small>Une liste qui ne demande qu'à grandir 🧑‍💼</small>
    </div>
    <ul class="relative m-8 border-l border-gray-700"> 
        {#each data.experiences as experience}
        <TimelineItem {experience}/>
        {/each}
        <li class="mb-10 ml-6">
            <div class="absolute w-3 h-3 timeline-start bg-gray-700"></div>
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