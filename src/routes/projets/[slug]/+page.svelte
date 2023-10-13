<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	
	export let data;
	let emblaApi;
	let options = { loop: true };
	let progress = 0;
	let progressStep = 0;
	
	const onInit = (event) => {
		emblaApi = event.detail;
		progress = progressStep = 100/emblaApi.slideNodes().length;

		emblaApi.on('select', () => {
			let step = emblaApi.selectedScrollSnap() + 1;
			progress = step*progressStep;
		});
	}
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
					<img src="https://picsum.photos/500/200" class="w-full rounded-lg object-cover" />
				</div>
				<div class="embla__slide flex items-center">
					<img src="https://picsum.photos/500/300" class="w-full rounded-lg object-cover" />
				</div>
			</div>
		</div>
		<button class="btn" on:click={scrollNext}>❯</button>
	</div>
	<progress class="progress" value="{progress}" max="100"></progress>
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
	.progress {
		height: .5px;
	}
	
	.progress::-webkit-progress-value {
		transition: width 0.3s ease-in-out;
	}
	
	.progress::-moz-progress-bar {
		transition: width 0.3s ease-in-out;
	}
</style>
