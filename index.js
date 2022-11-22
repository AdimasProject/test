const express = require('express')
const fs = require('fs');
const axios = require('axios');
const HMfull = require('hmfull');
const puppeteer = require('puppeteer');
const app = express()
const port = 3000

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

app.get('/', async (req, res) => {
const cuk = await HMfull.HMtai.sfw.wallpaper()
var result = await getBuffer(cuk.url)
	res.set({'Content-Type': 'image/png'})
	res.send(result)
})

app.get('/textpro', async (req, res)
var text1 = req.query.text1
var text2 = req.query.text2

try {
	(async () => {
		const browser = await puppeteer.launch({
			headless: false,
		});
		const page = await browser.newPage();
		await page
		.goto("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", {
			waitUntil: "networkidle2"
		})
		.then(async () => {
			await page.type("#text-0", text1)
			await page.type("#text-1", text2);
			await page.click("#submit");
			await new Promise(resolve => setTimeout(resolve, 5000));
			const element = await page.$(
				'div[class="btn-group"] > a'
				);
			const text = await (await element.getProperty("href")).jsonValue();
			const urlmp4 = ({
				url: text
			})
			res.json(urlmp4)
			browser.close();
		})
		.catch((err => {
			console.log(err)
		}))
	})();
} catch (error) {
	console.log('error bang')
}

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
