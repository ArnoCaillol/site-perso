export const load = async ({ fetch }) => {
	const response = await fetch(`/api/experiences`);
	const experiences = await response.json();

	return {
		experiences
	};
};