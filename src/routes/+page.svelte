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
<section id="projets">
  <div class="my-8 text-center">
    <h2 class="text-3xl font-bold">Mes projets</h2>
    <p>Some description or content for the header section can go here.</p>
  </div>
  <!-- Cards Section -->
  <div class="flex flex-col md:flex-row h-full md:h-auto p-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
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
</section>
<div class="my-8 text-center">
  <h2 class="text-3xl font-bold">Expériences</h2>
</div>
<div class="p-6">
  <!-- Experience 1 -->
  <div class="card card-side bordered timeline-item">
    <div class="timeline-icon bg-[#05d797]"></div>
    <div class="timeline-content">
      <h4 class="font-bold">2022 - Present</h4>
      <p><strong>Senior Software Developer</strong></p>
      <p>Awesome Tech Inc, New York</p>
      <ul>
        <li>Developed XYZ feature that increased revenue by 10%</li>
        <li>Led a team of 5 junior developers</li>
        <!-- Add more responsibilities or accomplishments -->
      </ul>
    </div>
  </div>
  <div class="card card-side bordered timeline-item">
    <div class="timeline-icon bg-[#05d797]"></div>
    <div class="timeline-content">
      <h4 class="font-bold">2019 - 2022</h4>
      <p><strong>Software Developer</strong></p>
      <p>Code Factory, San Francisco</p>
      <ul>
        <li>Collaborated on ABC project</li>
        <li>Introduced unit testing practices</li>
        <!-- Add more responsibilities or accomplishments -->
      </ul>
    </div>
  </div>
</div>
<style>
  .timeline-item {
    display: flex;
    margin-bottom: 20px;
    position: relative;
    align-items: center;
    justify-content: center;
  }
  
  .timeline-icon {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    transform: skewX(-10deg);
    position: relative;
    z-index: 1;
  }
  
  .timeline-content {
    margin-left: 30px;
    padding: 10px;
    border-radius: 6px;
    position: relative;
    width: 70%;  /* Adjust this based on your design preference */
  }
  
  .timeline-content::before {
    content: '';
    position: absolute;
    width: 2px;
    top: 0;
    bottom: 0;
    left: -17px; /* Half the timeline icon width minus half this width */
  }
  
  .card {
    transition: box-shadow .2s ease-in-out;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, .1);
  }

  .card:hover {
    box-shadow: 0px 4px 10px 8px rgb(0 0 0 / 10%);
  }
</style>