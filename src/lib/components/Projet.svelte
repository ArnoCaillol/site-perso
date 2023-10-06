<script>
    export let projet;
</script>
<div class="card bordered">
    <figure>
      <!-- You can place an image here if needed -->
    </figure>
    <div class="card-body">
      <h2 class="card-title">{projet.meta.title}</h2>
      <p>{projet.meta.date}</p>
      <p>{projet.meta.caption}</p>
    </div>
  </div>