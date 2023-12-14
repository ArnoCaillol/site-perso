<script>
  import moi from '$lib/assets/moi.jpg';
  import laptop from '$lib/assets/laptop.jpg';
</script>

<svelte:head>
<title>Arnaud Caillol - Développeur Freelance</title>
<meta property="og:title" content="Arnaud Caillol - Développeur Freelance" />
</svelte:head>

<section class="hero py-20">
  <div class="hero-content flex-col lg:flex-row-reverse lg:mx-24">
    <img src="{moi}" width="240" height="311" class="rounded-lg shadow-2xl sm:w-52" alt="Arnaud Caillol"/>
    <div>
      <h1 class="text-center lg:text-left text-5xl font-bold">Bonjour 👋</h1>
      <p class="py-6 text-xl font-bold">Je m'appelle <strong>Arnaud CAILLOL</strong>.</p>
      <p class="text-justify py-2">Je suis <strong>développeur freelance</strong> avec une licence professionnelle et <strong>plusieurs années d'expérience professionnelle</strong> au cours desquelles j'ai eu le plaisir de travailler pour des clients issus de <em>divers marchés</em> et ayant des <em>besoins variés</em>.</p>
      <p class="text-justify py-2">Ma <em>curiosité</em>, mon intérêt pour l'<em>innovation</em> et les <em>nouveaux défis</em> m'ont conduit à maîtriser l'<em>anglais</em> et le <em>portugais</em>, ce qui m'a offert des <em>opportunités professionnelles enrichissantes</em>, mettant en avant mon <em>adaptabilité</em> et mon <em>ouverture d'esprit</em>.</p>
      <p class="text-justify py-2">J'ai effectué deux stages au <em>Brésil</em>, aux côtés d'une agence de marketing <em>dynamique</em> et <em>influente</em> de la région.</p>
      <p class="text-justify py-2">De retour en France, j'ai eu la chance de collaborer avec des clients en transformant ainsi leurs <em>projets</em> en <em>réalité</em> et répondant à leurs <em>besoins</em> avec <em>satisfaction</em>.</p>
      <p class="text-justify py-2">Mon bagage professionnel et personnel me confère une <em>compétence particulière</em> dans la <em>résolution de problèmes</em> et une soif de nouveaux défis. Confiez-moi votre projet, et ensemble, nous le réaliserons avec <em>succès</em>.</p>
    </div>
  </div>
</section>
<section id="cta" class="flex flex-col flex-wrap justify-center content-center rounded-xl h-screen">
  <img src="{laptop}" alt="">
  <div class="card bg-base-100 shadow-xl p-8">
    <div class="prose prose-lg mb-8 text-center max-w-full">
      <h2 class="text-3xl">Une question ?</h2>
    </div>
    <div class="btn-group btn-group-vertical md:btn-group-horizontal">
      <a href="/contact" class="btn btn-primary">Contactez moi !</a>
      <a href="/projets" class="btn btn-secondary">Projets</a>
      <a href="/experiences" class="btn btn-info">Expériences</a>
    </div>
  </div>
</section>

<style>
  section {
    padding: 1rem;
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
</style>