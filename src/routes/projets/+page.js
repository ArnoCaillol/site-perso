export const load = async ({ fetch }) => {
	const response = await fetch(`/api/projets`);
	const posts = await response.json();

	return {
		posts
	};
};