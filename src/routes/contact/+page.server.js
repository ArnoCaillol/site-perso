import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {    
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log(data)
		const email = data.get('email');

		if (!email) {
			return fail(400, { email, error: 'test' });
		}
        return { success: true };
        fetch('https://formspree.io/f/xqkvwlzp', {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return { success: true };
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    console.log(data["errors"].map(error => error["message"]).join(", "))
                } else {
                    return { success: true };
                    console.log("Oops! There was a problem submitting your form")
                }
            })
        }
    }).catch(error => {
        console.log("Oops! There was a problem submitting your form")
    });
}
};
