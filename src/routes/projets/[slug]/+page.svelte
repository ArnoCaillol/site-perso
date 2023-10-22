<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	import ScrollTop from '$lib/components/ScrollTop.svelte';
	import slugify from 'slugify';
	import { afterNavigate } from '$app/navigation';
	
	const slugifyParams = { lower: true, remove: /[*+~.()'"!:@]/g };
	let y;
	let delayedY = 0;
	
	$: if (y !== delayedY) {
		setTimeout(() => {
			delayedY = y;
		}, 250);
	}
	
	export let data;
	
	let href = '/projets';
	
	afterNavigate(({from}) => {
		const previousPage = from?.url.pathname;
		if(previousPage?.includes('category')) href =  previousPage;
	});
	
	const loadingSpinner = (btn) => {
        setTimeout(() => btn.target.innerHTML = '<span class="loading loading-spinner loading-xs"></span>', 200)
    }

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
	<div class="divider divider-horizontal hidden md:flex" style="margin-top: {delayedY}px">
		<a {href} class="btn btn-primary bg-[#05d797] back" on:click={(btn) => loadingSpinner(btn)}>❮</a>
	</div> 
	<article class="prose lg:prose-lg p-4 mb-8">
		<div class="flex flex-col items-center">
			<div class="flex justify-center space-x-4">
				<a href={href} class="flex md:hidden btn btn-primary bg-[#05d797] back" on:click={(btn) => loadingSpinner(btn)}>❮</a>
				<h1 class="mb-2 projet-header">{data.title}</h1>
			</div>
			{#each data.categories as category}
			<a href="/projets/category/{slugify(category, slugifyParams)}" class="btn">{category}</a>
			{/each}
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
	<ScrollTop />
</div>
<svelte:window bind:scrollY={y} />

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
	
	.divider-horizontal{
		transition: margin ease 150ms;
	}
	
	.divider-horizontal:before {
		height: 0 !important;
	}
	
	@keyframes initialSkew {
		0% {
			transform: skewX(0deg);
		}
		100% {
			transform: skewX(-10deg);
		}
	}
	
	.back {
		aspect-ratio: 1;
		border-radius: 2px;
		animation: initialSkew 500ms forwards;
	}
	
	.back:hover {
		animation: initialSkew;
		animation-direction: reverse;
	}
</style>
