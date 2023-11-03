/** @type {import('./$types').Actions} */
export const actions = {    
    default: async ({ cookies, request }) => {
        const data = await request.formData();

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
                }
            })
        }
    }).catch(error => {
        console.log("Oops! There was a problem submitting your form")
    });
}
};
