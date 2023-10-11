<script>
	export let data;
    let currentSlide = 1; // initial slide

    function navigate(direction) {
        if (direction === 'next') {
            currentSlide = (currentSlide % 2) + 1;
        } else if (direction === 'prev') {
            currentSlide = ((currentSlide + 2) % 2) + 1;
        }
    }
</script>
<svelte:head>
<title>Projet - {data.title}</title>
<meta property="og:title" content={data.title} />
</svelte:head>
<article class="prose lg:prose-lg mx-auto p-4 mb-8">
	<h1>{data.title}</h1>
	<p class="text-gray-500">Published: {data.date}</p>
	<div class="carousel w-full">
		{#if currentSlide === 1}

		<div id="slide1" class="carousel-item relative w-full">
			<img src="https://picsum.photos/500/200" class="w-full rounded-xl object-cover" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<button on:click={() => navigate('prev')} class="btn btn-circle">❮</button>
                <button on:click={() => navigate('next')} class="btn btn-circle">❯</button>
			</div>
		</div> 
		{:else if currentSlide === 2}
 
		<div id="slide2" class="carousel-item relative w-full">
			<img src="https://picsum.photos/500/300" class="w-full rounded-xl object-cover" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<button on:click={() => navigate('prev')} class="btn btn-circle">❮</button>
                <button on:click={() => navigate('next')} class="btn btn-circle">❯</button>
			</div>
		</div>
		{/if}

	</div>
	<svelte:component this={data.content} />
</article>