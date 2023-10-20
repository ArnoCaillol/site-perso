<script>
    let y;
</script>

{#if y > 100}
<button class="btn btn-square bg-neutral text-neutral-content hover:bg-neutral-focus" on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
{/if}

<svelte:window bind:scrollY={y} />

<style>
    button {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
    }
</style>