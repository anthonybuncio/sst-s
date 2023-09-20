import axios from "axios";
import { ApiHandler } from "sst/node/api";
import * as cheerio from 'cheerio';



export const handler = ApiHandler(async (evt) => {
	// const WEBHOOK = process.env.WEBHOOK_URL || process.env.LOCAL_WEBHOOK_URL;
	// console.log("Webhook value: ", WEBHOOK);
	// try {
	// 	const response = await axios.post(WEBHOOK, {
	// 		content: `Hello, it's ${new Date().toLocaleString('en-US')}. Here are some updates: `
	// 	},
	// 		{
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			}
	// 		});

	// 	const result = await response;
	// 	console.log("Success:", result);

	// 	return {
	// 		statusCode: 200,
	// 		body: JSON.stringify({
	// 			status: "Success",
	// 			msg: `Mesage posted at ${new Date().toLocaleTimeString('en-US')}`
	// 		})
	// 	};
	// } catch (error) {
	// 	console.error("Error:", error);
	// }

	try {
		// TODO: Don't need to load cheerio. 
		// Yahoo currently provides API json data (see README.md)
		const pageData = axios
			.get('https://sports.yahoo.com/mlb/scoreboard/')
			.then(res => {
				const $ = cheerio.load(res.data);
				const title = $('h1.column-header').text();

				return title;
			});


		return {
			statusCode: 200,
			body: JSON.stringify({
				status: "Success",
				msg: `Mesage posted at ${new Date().toLocaleTimeString('en-US')}`,
				body: pageData
			})
		};
	} catch (error) {
		console.error("Error:", error);
	}
});