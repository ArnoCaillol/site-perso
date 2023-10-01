<script>
    export let data;
</script>
<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="/images/logo.png" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 class="text-5xl font-bold">Bonjour !</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
        </div>
    </div>
</div>
<div class="flex flex-col md:flex-row h-full md:h-auto">
    <!-- Top Section on mobile: Header -->
    <div class="p-4 w-full md:w-1/4 flex flex-col justify-center h-1/2 md:h-auto">
      <h1 class="text-2xl font-bold">Mes projets</h1>
      <p>Some description or content for the header section can go here.</p>
    </div>
  
    <!-- Cards Section -->
    <div class="p-4 w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each data.projets as projet}
        <div class="card bordered">
          <figure>
            <!-- You can place an image here if needed -->
          </figure>
          <div class="card-body">
            <h2 class="card-title">{projet.meta.title}</h2>
            <p>{projet.meta.date}</p>
            <div class="card-actions">
              <button class="btn btn-primary">Action</button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>