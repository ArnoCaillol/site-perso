export const load = async ({ fetch }) => {
	const response = await fetch(`/api/projets`);
	const projets = await response.json();

	return {
		projets
	};
};