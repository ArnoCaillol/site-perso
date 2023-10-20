<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	
	// let y;
	// let delayedY = 0;
	
	// $: if (y !== delayedY) {
		// 	setTimeout(() => {
			// 		delayedY = y;
			// 	}, 250);
			// }
			
			export let data;
			let emblaApi;
			let options = { loop: true };
			
			const onInit = (event) => {
				emblaApi = event.detail;
				
				emblaApi.on('select', () => {
					const dots = document.querySelectorAll('.dot');
					dots[emblaApi.previousScrollSnap()].classList.remove('bg-base-300');
					dots[emblaApi.previousScrollSnap()].classList.add('bg-base-200');
					dots[emblaApi.selectedScrollSnap()].classList.remove('bg-base-200');
					dots[emblaApi.selectedScrollSnap()].classList.add('bg-base-300');
				});
			}
			const scrollPrev = () => emblaApi.scrollPrev();
			const scrollNext = () => emblaApi.scrollNext();
			const scrollTo = (index) => emblaApi.scrollTo(index);
			
			let images = [
			{
				src: 'https://picsum.photos/500/200',
				alt: ''
			},
			{
				src: 'https://picsum.photos/500/300',
				alt: ''
			},
			{
				src: 'https://picsum.photos/500/250',
				alt: ''
			},
			]
		</script>
		
		<svelte:head>
		<title>Arnaud Caillol - {data.title}</title>
		<meta property="og:title" content={data.title} />
	</svelte:head>
	
	<div class="flex mx-auto justify-center h-full">
		<div class="divider divider-horizontal hidden md:flex">
			<a href="/projets" class="btn back"><span>❮</span></a>
		</div> 
		<article class="prose lg:prose-lg p-4 mb-8">
			<div class="flex flex-col items-center">
				<h1 class="mb-2 projet-header">{data.title}</h1>
				<small class="text-gray-500">{data.date}</small>
			</div>
			<div class="flex items-center">
				<button class="btn btn-square hidden md:block mr-1" on:click={scrollPrev}>❮</button>
				<div class="embla" use:emblaCarouselSvelte="{{ options }}" on:emblaInit="{onInit}">
					<div class="embla__container">
						{#each images as img}
						<div class="embla__slide flex items-center">
							<img src={img.src} alt={img.alt} class="w-full rounded-lg object-cover" />
						</div>
						{/each}
					</div>
				</div>
				<button class="btn btn-square hidden md:block ml-1" on:click={scrollNext}>❯</button>
			</div>
			<div class="flex justify-center space-x-3">
				{#each images as img, i}
				<button type="button" on:click={() => scrollTo(i)} class="w-3 h-3 rounded-full dot {i == 0 ? 'bg-base-300' : 'bg-base-200'}"></button>
				{/each}
			</div>
			<svelte:component this={data.content} />
		</article>
		<div class="divider divider-horizontal hidden md:flex">
			<button class="btn btn-secondary scrollTop" on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				<span><i class="arrow up"></i></span>
			</button>
		</div> 
	</div>
	<!-- <svelte:window bind:scrollY={y} /> -->
	
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
		
		.projet-header {
			view-transition-name: titre-projet;
		}
		
		.back {
			top: 6rem;
			background-color: #05d797;
		} 
		
		.scrollTop {
			bottom: 1rem;
		}
		
		.arrow {
			border: solid white;
			border-width: 0 3px 3px 0;
			display: inline-block;
			padding: 3px;
		}
		
		.up {
			transform: rotate(-135deg);
			-webkit-transform: rotate(-135deg);
		}
		
		.divider:not(:empty) {
			gap: 0 !important;
		}
		
		.divider-horizontal {
			position: relative;
		}
		
		.divider-horizontal:last-child {
			padding-bottom: 1rem;
		}
		
		.divider-horizontal:last-child:after, .divider-horizontal:first-child:before {
			display: none;
		}
		
		@keyframes initialSkew {
			0% {
				transform: skewX(0deg);
			}
			100% {
				transform: skewX(-10deg);
			}
		}
		
		.back, .scrollTop {
			position: sticky;
			aspect-ratio: 1;
			border-radius: 2px;
			animation: initialSkew 500ms forwards;
		}
		
		.back>span, .scrollTop>span {
			display: none;
		}
		
		.back:hover, .scrollTop:hover {
			animation: initialSkew;
			animation-direction: reverse;
		}
		
		.back:hover span, .scrollTop:hover span {
			display: inline-block;
		}
	</style>
	