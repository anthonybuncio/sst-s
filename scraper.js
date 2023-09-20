import axios from "axios";
import * as cheerio from 'cheerio';


	axios
		.get('https://api-secure.sports.yahoo.com/v1/editorial/s/scoreboard?lang=en-US&region=US&tz=America%2FChicago&ysp_redesign=1&ysp_platform=desktop&leagues=mlb&date=2023-09-19&v=2&ysp_enable_last_update=1')
		.then(res => {
			console.log(res.data)
		})
		.catch((err) => console.error("Error:", err));
