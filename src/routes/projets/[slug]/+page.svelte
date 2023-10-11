<script>
	export let data;
</script>
<svelte:head>
<title>Projet - {data.title}</title>
<meta property="og:title" content={data.title} />
</svelte:head>
<article class="prose lg:prose-lg mx-auto p-4">
	<h1>{data.title}</h1>
	<p class="text-gray-500">Published: {data.date}</p>
	<div class="carousel w-full">
		<div id="slide1" class="carousel-item relative w-full">
			<img src="https://picsum.photos/500/200" class="w-full rounded-xl object-cover" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide2" class="btn btn-circle">❮</a> 
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div> 
		<div id="slide2" class="carousel-item relative w-full">
			<img src="https://picsum.photos/500/300" class="w-full rounded-xl object-cover" />
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href="#slide1" class="btn btn-circle">❮</a> 
				<a href="#slide1" class="btn btn-circle">❯</a>
			</div>
		</div>
	</div>
	<svelte:component this={data.content} />
</article>