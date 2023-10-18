<script>
  export let experience;
</script>
<li class="prose prose-lg mt-10 ml-6">
  <div class="absolute w-3 h-3 timeline-icon mt-1.5 -left-3.5 bg-[#05d797]"></div>
  <time>{experience.meta.date}</time>
  <h3 class="mt-1">{experience.meta.title}</h3>
  <p>{experience.meta.caption}</p>
</li>
<style>
  .timeline-icon {
    width: 25px;
    height: 25px;
    border-radius: 2px;
    transform: skewX(-10deg);
    z-index: 1;
    overflow: hidden;
    transition: .5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Initial shadow */
  }
  
  li:hover .timeline-icon {
    transform: scale(1.05) skewX(-10deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Shadow on hover */
  }
  
  .timeline-icon::before {
    content: "";
    background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1));
    width: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -35px;
    transform: skewX(-25deg);
    transition: all 0.3s ease-out;
  }
  
  li:hover .timeline-icon::before {
    left: 130%;
  }
</style>