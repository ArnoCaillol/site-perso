import { fetchProjets } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchProjets();

	// const sortedPosts = allPosts.sort((a, b) => {
	// 	return new Date(b.meta.date) - new Date(a.meta.date);
	// });

	return json(allPosts);
};