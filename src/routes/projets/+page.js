export const load = async ({ fetch }) => {
	const response = await fetch(`/api/projets`);
	const projets = await response.json();

    // Extract and deduplicate categories
    const categories = [...new Set(projets.flatMap(projet => projet.meta.categories))];

	return {
		projets,
        categories
	};
};