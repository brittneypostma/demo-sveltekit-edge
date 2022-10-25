import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async (event) => {
	console.log(event.platform.context);
	return {
		edge: event.platform.context.geo.city
	};
};

// 5:32:48 AM: [render] {
//   context: {
//     cookies: {
//       delete: [Function: bound delete],
//       get: [Function: bound get],
//       set: [Function: bound set]
//     },
//     geo: {
//       city: "Holland",
//       country: { code: "US", name: "United States" },
//       subdivision: { code: "MI", name: "Michigan" }
//     },
//     ip: "",
//     json: [Function: bound json],
//     log: [Function],
//     next: [Function: next],
//     requestId: "01GFTBSXMXDWNSGJF0QTH0CRHZ",
//     rewrite: [Function: bound rewrite],
//     site: {
//       id: "846ed0e0-067a-474a-b074-56ad712b2272",
//       name: "demo-sveltekit-edge",
//       url: "http://demo-sveltekit-edge.netlify.app"
//     },
//     account: { id: "" }
//   }
// }
