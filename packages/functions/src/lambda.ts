import puppeteer from "puppeteer-extra";
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker';
import chromium from '@sparticuz/chromium';

export const handler = async () => {
	try {
		puppeteer.use(AdblockerPlugin()).use(StealthPlugin());

		// **********************************
		// **********   TESTING		**********
		// **********************************
		const browser = await puppeteer.launch({
			headless: "new",
			executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
		});

		// **********************************
		// **********  PRODUCTION  **********
		// **********************************
		// const browser = await puppeteer.launch({
		// 	args: chromium.args,
		// 	defaultViewport: chromium.defaultViewport,
		// 	executablePath: await chromium.executablePath,
		// 	headless: chromium.headless,
		// 	ignoreHTTPSErrors: true
		// });

		const page = await browser.newPage();

		// Navigate to the url
		await page.goto("https://www.timeanddate.com/worldclock/usa/houston");

		// Take the screenshot
		const screenshot = (await page.screenshot({ encoding: "base64" })) as string;

		return {
			statusCode: 200,
			// Return as binary data
			isBase64Encoded: true,
			headers: { "Content-Type": "image/png" },
			body: screenshot,
		};

	} catch (error) {
		console.log("error at scrape(fn)", error.message);
	}
};