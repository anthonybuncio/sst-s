import axios from "axios";
import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
	const WEBHOOK = process.env.WEBHOOK_URL || process.env.LOCAL_WEBHOOK_URL;
	console.log("Webhook value: ", WEBHOOK);
	try {
		const response = await axios.post(WEBHOOK, {
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