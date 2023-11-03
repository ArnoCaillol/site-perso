import { fetchAll } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allData = await fetchAll();

	allData.experiences = allData.experiences?.sort((a, b) => {
		return b.meta.ordre - a.meta.ordre;
	});

	return json(allData);
};