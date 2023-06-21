import axios from "axios";
import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
	// return {
	// 	statusCode: 200,
	// 	body: JSON.stringify({
	// 		msg: "Howdy!"
	// 	})
	// };
	try {
		const response = await axios.post("https://discord.com/api/webhooks/1118083859783897159/DZ1CQonoT0evOe6hFOGQdSfnchxkxxFNC75MyxtQA1jQdx6-PUvNj3sZnk-DTiO4l3PH" + "?wait=true", {
			content: `Hello, it's ${new Date().toLocaleTimeString('en-US')}. Here are some updates: `
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