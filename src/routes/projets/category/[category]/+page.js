import slugify from 'slugify';

export const load = async ({ fetch, params }) => {
    const { category } = params;
    const response = await fetch(`/api/projets`);
    const allProjets = await response.json();
	const slugifyParams = { lower: true, remove: /[*+~.()'"!:@]/g };
	
    let originalCategoryName;

    const projets = allProjets.filter(projet => 
        projet.meta.categories.some(c => {
            if (slugify(c, slugifyParams ) === category) {
                originalCategoryName = c;
                return true;
            }
        })
    );

    return {
        category: originalCategoryName || category,
        projets
    };
};
