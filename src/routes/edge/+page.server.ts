import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async (event, context) => {
	console.log(event, context);
	return {
		res: event.getClientAddress()
	};
};
