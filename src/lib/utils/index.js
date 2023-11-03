export const fetchAll = async () => {
	return {
		projets: await fetchProjets(),
		experiences: await fetchExperiences()
	}
};

export const fetchProjets = async () => {
	const allPostFiles = import.meta.glob('/src/routes/projets/*.md');
	return await fetchDataFromFiles(allPostFiles);
};

export const fetchExperiences = async () => {
	const allPostFiles = import.meta.glob('/src/routes/experiences/*.md');
	return await fetchDataFromFiles(allPostFiles);
};

const fetchDataFromFiles = async (allPostFiles) => {
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const module = await resolver();
			
			// Extract metadata and content from the module
			const { metadata, content } = module;

			// Determine post path based on the pattern of your paths
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				content: content,
				path: postPath
			};
		})
	);

	return allPosts;
};
