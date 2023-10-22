import { fetchExperiences } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchExperiences();

	const sortedPosts = allPosts.sort((a, b) => {
		return b.meta.ordre - a.meta.ordre;
	});

	return json(sortedPosts);
};