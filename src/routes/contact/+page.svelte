<div class="flex justify-center">
    <div class="prose md:w-3/4 p-4">
        <h1>Contact</h1>
        <form action="/submit" method="post">
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
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div>
</div>
