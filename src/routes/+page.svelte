<script>
  import Projet from "$lib/components/Projet.svelte";
  import TimelineItem from "$lib/components/TimelineItem.svelte";
  import moi from '$lib/assets/moi.jpg';
  import laptop from '$lib/assets/laptop.jpg';
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  
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
  const scrollTo = (index) => {
    emblaApi.scrollTo(index);
  }
  
</script>

<svelte:head>
<title>Arnaud Caillol</title>
<meta property="og:title" content="Arnaud Caillol" />
</svelte:head>

<section class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse lg:mx-24">
    <img src="{moi}" class="rounded-lg shadow-2xl w-60 sm:w-52" alt="Arnaud Caillol"/>
    <div>
      <h1 class="text-center lg:text-left text-5xl font-bold">Bonjour 👋</h1>
      <p class="py-6 text-xl font-bold">Je suis Arnaud, <em>développeur freelance</em> doté d'une licence avec <em>trois ans d'expérience professionnelle</em>.</p>
      <p class="text-justify py-2"><strong>Curieux</strong> et parfois réservé, je ne recule jamais devant un <strong>nouveau défi</strong> 😊.</p>
      <p class="text-justify py-2"><strong>Trilingue</strong>, je tire profit de cette compétence autant dans les contenus que je consulte (texte, audio ou vidéo) que dans les <strong>opportunités professionnelles</strong> qui m'ont mené, entre autres, à réaliser <strong>deux stages au Brésil</strong>.</p>
      <p class="text-justify py-2">Je suis fier de mes <strong>convictions</strong>, tout en valorisant profondément le <strong>respect</strong> et l'<strong>ouverture d'esprit</strong>.</p>
    </div>
  </div>
</section>
<section id="projets">
  <div class="prose lg:prose-lg my-8 text-center max-w-full">
    <h2 class="text-3xl">Mes projets</h2>
    <small>Une petite sélection 👌</small>
  </div>
  <div class="flex items-center justify-center mb-4">
    <button class="btn btn-square hidden md:block mr-1" on:click={scrollPrev}>❮</button>
    <div class="embla md:border-x-2 border-base-300" use:emblaCarouselSvelte="{{ options }}" on:emblaInit="{onInit}">
      <div class="embla__container">
        {#each data.projets as projet}
        <div class="embla__slide items-center">
          <Projet {projet}/>
        </div>
        {/each}
      </div>
    </div>
    <button class="btn btn-square hidden md:block ml-1" on:click={scrollNext}>❯</button>
  </div>
  <div class="flex justify-center space-x-3">
    {#each data.projets as img, i}
    <button type="button" on:click={() => scrollTo(i)} class="w-3 h-3 rounded-full dot {i == 0 ? 'bg-base-300' : 'bg-base-200'}"></button>
    {/each}
  </div>
</section>
<section id="experiences">
  <div class="prose prose-lg my-8 text-center max-w-full">
    <h2 class="text-3xl">Expériences</h2>
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

<section id="cta" class="flex flex-col flex-wrap justify-center content-center rounded-xl h-screen">
  <img src="{laptop}" alt="">
  <div class="card bg-base-100 shadow-xl p-8">
    <div class="prose prose-lg mb-8 text-center max-w-full">
      <h2 class="text-3xl">Une question ?</h2>
    </div>
    <div class="btn-group btn-group-vertical md:btn-group-horizontal">
      <a href="/contact" class="btn btn-primary">Contactez moi !</a>
      <a href="/projets" class="btn btn-secondary">Mes projets</a>
    </div>
  </div>
</section>

<style>
  section {
    padding: 1rem;
  }
  
  ul {
    list-style-type: none;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  }
  
  .timeline-start {
    width: 1rem;
    height: 1rem;
    left: -.55rem;
    border-radius: 100%;
    z-index: 1;
  }
  
  #cta{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  #cta>img { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(3px) grayscale(70%);
    z-index: -1;
  }
  
  #cta .card {
    transition: transform 0.2s, box-shadow 0.2s;
    transform: perspective(1000px);
  }
  
  .embla {
    overflow: hidden;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  .embla__container {
    display: flex;
  }
  
  .embla__slide {
    flex: 0 0 auto;
    min-width: 0;
    margin-right: 1rem;
    max-width: 100%;
  }
  
  .embla__slide:first-child {
    margin-left: 1rem;
  }
  
  .embla__slide:last-child {
    margin-right: 0;
  }
</style>