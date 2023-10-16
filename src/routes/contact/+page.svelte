<script>
    import { fly, slide } from 'svelte/transition';
    import { enhance } from '$app/forms';
    
    export let form;
    
    const handleEnhance = ({ formElement, formData, action, cancel }) => {
        [...document.forms[0].elements].forEach(e => e.disabled = true);
        
        document.querySelector('.loading').classList.remove('opacity-0')
        return async ({ result }) => {
            [...document.forms[0].elements].forEach(e => e.disabled = true);
            document.querySelector('.loading').classList.add('opacity-0');
            if(result.type === 'success'){
                const toastSuccess = document.getElementById('success');
                toastSuccess.classList.remove('hidden');
                setTimeout(() => toastSuccess.classList.add('hidden'), 3000);
            } else {
                console.log()
                const toastError = document.getElementById('error');
            }
        };
    }
</script>
<div class="flex justify-center">
    <div class="prose md:w-3/4 p-4">
        <h1>Contact</h1>
        {#if form?.error}
        <p class="error">{form.error}</p>
        {/if}
        <form method="post" use:enhance={handleEnhance}>
            <div class="mb-6">
                <label for="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre Nom" class="input input-bordered w-full text-lg" required>
            </div>
            <div class="mb-6">
                <label for="email" class="block text-lg mb-3">Email</label>
                <input type="email" id="email" name="email" value={form?.email ?? ''}
                placeholder="Votre Email" class="input input-bordered w-full text-lg">
            </div>
            <div class="mb-6">
                <label for="message" class="block text-lg mb-3">Message</label>
                <textarea id="message" name="message" placeholder="Votre Message" rows="5" class="textarea textarea-bordered w-full text-lg" required></textarea>
            </div>
            <div class="mb-6 flex align-center gap-4">
                <button type="submit" class="btn btn-primary">
                    Envoyer
                </button>
                <span class="loading loading-spinner transition-opacity duration-500 ease-in opacity-0"></span>
            </div>
        </form>
    </div>
</div>
<div class="toast toast-bottom toast-center">
    <div id="success" class="alert alert-success hidden">
        <span>Message sent successfully.</span>
    </div>
    <div id="error" class="alert alert-error hidden">
        <span class="message">Error while sending the message.</span>
    </div>
</div>