/** @type {import('./$types').Actions} */
export const actions = {    
    default: async (event) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return;
    }
};
