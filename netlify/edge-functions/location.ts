import { Context } from 'https://edge.netlify.com';

export default async (request: Request, context: Context) => {
	// Get the page content
	const response = await context.next();
	const page = await response.text();

	// Search for the placeholder
	const regex = /COUNTRYNAME/i;

	// Replace the content
	const countryName = context.geo?.country?.name || 'somewhere in the world';

	const updatedPage = page.replace(regex, countryName);
	return new Response(updatedPage, response);
};
