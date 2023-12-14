<script>
    // import { enhance } from '$app/forms';
    
    // export let form;
    
    // const handleEnhance = ({ formElement, formData, action, cancel }) => {
    //     [...document.forms[0].elements].forEach(e => e.disabled = true);
        
    //     document.querySelector('.loading').classList.remove('opacity-0')
    //     return async ({ result }) => {
    //         [...document.forms[0].elements].forEach(e => e.disabled = true);
    //         document.querySelector('.loading').classList.add('opacity-0');
    //         if(result.type === 'success'){
    //             const toastSuccess = document.getElementById('success');
    //             toastSuccess.classList.remove('hidden');
    //             setTimeout(() => toastSuccess.classList.add('hidden'), 3000);
    //             [...document.forms[0].elements].forEach(e => e.disabled = false);
    //             document.forms[0].reset();
    //         } else {
    //             const toastError = document.getElementById('error');
    //         }
    //     };
    // }
</script>

<svelte:head>
<title>Arnaud Caillol - Contact</title>
<meta property="og:title" content="Arnaud Caillol - Contact" />
</svelte:head>

<div class="flex justify-center p-20">
    <div class="prose lg:prose-lg md:w-3/4 p-4">
        <h1 class="text-center">Contact</h1>
        <div class="card bg-base-200 mb-4">
          <div class="card-body text-center">
            <p>Utilisez le formulaire de contact ci-dessous</p>
            <small>Vous pouvez également me joindre par téléphone ou sur les réseaux sociaux :</small>
            <p class="text-center">
                <a href="tel:+33646851070"><iconify-icon icon="mdi:phone" width="24" height="24"></iconify-icon></a> 
                <a href="https://instagram.com/arnaud.caillol"><iconify-icon icon="mdi:instagram" width="24" height="24"></iconify-icon></a> 
                <a href="https://www.linkedin.com/in/arnaud-caillol"><iconify-icon icon="mdi:linkedin" width="24" height="24"></iconify-icon></a> 
                <a href="https://github.com/ArnoCaillol"><iconify-icon icon="mdi:github" width="24" height="24"></iconify-icon></a> 
            </p>
          </div>
        </div>
        <!-- {#if form?.error}
        <p class="error">{form.error}</p>
        {/if} -->
        <form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
            <input type="hidden" name="contact" value="contact">
            <div class="mb-6">
                <label for="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre Nom" class="input input-bordered w-full text-lg" required>
            </div>
            <div class="mb-6">
                <label for="email" class="block text-lg mb-3">Email</label>
                <input type="email" id="email" name="email"
                placeholder="Votre Email" class="input input-bordered w-full text-lg">
            </div>
            <div class="mb-6">
                <label for="message" class="block text-lg mb-3">Message</label>
                <textarea id="message" name="message" placeholder="Votre Message" rows="5" class="textarea textarea-bordered w-full text-lg" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div>
</div>
<!-- <div class="toast toast-bottom toast-center">
    <div id="success" class="alert alert-success hidden">
        <span>Message envoyé avec succès !</span>
    </div>
    <div id="error" class="alert alert-error hidden">
        <span class="message">Erreur lors de l'envoi du message</span>
    </div>
</div> -->