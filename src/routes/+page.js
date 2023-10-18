export const load = async ({ fetch }) => {
	const fetchProjets = await fetch(`/api/projets`);
	const projets = await fetchProjets.json();

	const fetchExperiences = await fetch(`/api/experiences`);
	const experiences = await fetchExperiences.json();

	return {
		projets,
		experiences
	};
};