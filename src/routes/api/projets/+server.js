import { fetchProjets } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchProjets();

	return json(allPosts);
};