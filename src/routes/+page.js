export const load = async ({ fetch }) => {
    const fetchData = await fetch(`/api/data`);
    const data = await fetchData.json();

    return {
        projets: data.projets,
        experiences: data.experiences,
    };
};
