<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	
	export let data;
	let emblaApi
	let options = { loop: true }
	
	const onInit = (event) => emblaApi = event.detail;
	const scrollPrev = () => emblaApi.scrollPrev();
	const scrollNext = () => emblaApi.scrollNext();
</script>

<svelte:head>
<title>Arnaud Caillol - {data.title}</title>
<meta property="og:title" content={data.title} />
</svelte:head>

<article class="prose lg:prose-lg mx-auto p-4 mb-8">
	<h1>{data.title}</h1>
	<p class="text-gray-500">Published: {data.date}</p>
	<div class="flex items-center">
		<button class="btn" on:click={scrollPrev}>❮</button>
		<div class="embla" use:emblaCarouselSvelte="{{ options }}" on:emblaInit="{onInit}">
			<div class="embla__container">
				<div class="embla__slide flex items-center">
					<img src="https://picsum.photos/500/200" class="w-full rounded-xl object-cover" />
				</div>
				<div class="embla__slide flex items-center">
					<img src="https://picsum.photos/500/300" class="w-full rounded-xl object-cover" />
				</div>
			</div>
		</div>
		<button class="btn" on:click={scrollNext}>❯</button>
	</div>
	<svelte:component this={data.content} />
</article>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
