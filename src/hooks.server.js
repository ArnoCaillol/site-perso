/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	if (event && event.cookies) {
		const theme = event.cookies.get("theme");
		if (theme) {
			return await resolve(event, {
                transformPageChunk: ({ html }) => {
                    return html.replace('data-theme=""', `data-theme="${theme}"`);
                },
            });
		}
	}

	return await resolve(event);
};
