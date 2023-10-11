<script>
    import { enhance, applyAction } from '$app/forms';
</script>
<div class="flex justify-center">
    <div class="prose md:w-3/4 p-4">
        <h1>Contact</h1>
        <form method="post" use:enhance={({ formElement, formData, action, cancel }) => {
            console.log('test')
            return async ({ result }) => {
                console.log(result)
                if(result.type === 'success'){
                    const toastSuccess = document.getElementById('success');
                    toastSuccess.classList.remove('hidden');
                    setTimeout(() => toastSuccess.classList.add('hidden'), 3000);
                } else {
                    const toastError = document.getElementById('error');

                }
            };
        }}>
            <div class="mb-6">
                <label for="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre Nom" class="input input-bordered w-full text-lg">
            </div>
            <div class="mb-6">
                <label for="email" class="block text-lg mb-3">Email</label>
                <input type="email" id="email" name="email" placeholder="Votre Email" class="input input-bordered w-full text-lg">
            </div>
            <div class="mb-6">
                <label for="message" class="block text-lg mb-3">Message</label>
                <textarea id="message" name="message" placeholder="Votre Message" rows="5" class="textarea textarea-bordered w-full text-lg"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer </button>
        </form>
    </div>
</div>
<div class="toast toast-bottom toast-center">
    <div id="success" class="alert alert-success hidden">
      <span>Message sent successfully.</span>
    </div>
    <div id="error" class="alert alert-error hidden">
      <span>Error while sending the message.</span>
    </div>
</div>
<style>
    .alert {
        transition: all .5s ease;
    }
</style>