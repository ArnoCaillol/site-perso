<script>
    export let data;
</script>

<h1 class="text-2xl font-bold mb-4">Projets</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.posts as post}
    <div class="card lg:card-side bg-base-100 shadow-xl">
        <!-- <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> -->
        <div class="card-body">
            <h2 class="card-title">
                <a href={post.path}>
                    {post.meta.title}
                </a>
                <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>{post.meta.caption ?? ''}</p>
            <p>{post.meta.date}</p>
            <div class="card-actions justify-end">
                <div class="badge badge-outline">SvelteKit</div> 
            </div>
        </div>
    </div>
    {/each}
</div>
