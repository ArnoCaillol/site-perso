// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, categories, images, url, repo } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		categories,
		images,
		url,
		repo
	};
}