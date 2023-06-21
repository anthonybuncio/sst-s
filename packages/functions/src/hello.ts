import axios from "axios";
import { ApiHandler } from "sst/node/api";

const DATA_URL = process.env.WEBHOOK_URL;

export const handler = ApiHandler(async (evt) => {
	// return {
	// 	statusCode: 200,
	// 	body: JSON.stringify({
	// 		msg: "Howdy!"
	// 	})
	// };
	try {
		const response = await axios.post(DATA_URL, {
			content: `Hello, it's ${new Date().toLocaleString('en-US')}. Here are some updates: `
		},
			{
				headers: {
					"Content-Type": "application/json",
				}
			});

		const result = await response;
		console.log("Success:", result);

		return {
			statusCode: 200,
			body: JSON.stringify({
				status: "Success",
				msg: `Mesage posted at ${new Date().toLocaleTimeString('en-US')}`
			})
		};
	} catch (error) {
		console.error("Error:", error);
	}
});