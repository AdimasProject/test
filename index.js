const express = require('express')
const fs = require('fs');
const axios = require('axios');
const HMfull = require('hmfull');
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
