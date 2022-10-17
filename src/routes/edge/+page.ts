import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async (event) => {
	console.dir(event);
	console.log(event.platform);
	return {
		res: event.platform
	};
};
