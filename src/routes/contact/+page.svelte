<div class="flex justify-center items-center">
    <div class="w-3/4 lg:w-1/2 p-12 shadow-2xl rounded-lg">
        <h2 class="text-3xl font-bold mb-6">Contact</h2>
        <form action="/submit" method="post">
            <div class="mb-6">
                <label for="name" class="block text-lg mb-3">Nom</label>
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
