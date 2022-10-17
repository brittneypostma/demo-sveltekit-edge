import type { PageServerLoad } from './$types';
export async function load(event: PageServerLoad) {
	console.log(event);
	const response = await fetch('/location');
	console.log(response);
	return {
		event
	};
}
