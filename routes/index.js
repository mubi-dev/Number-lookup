const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
    const url = `http://apilayer.net/api/validate?access_key=${process.env.API_KEY}&number=${process.env.NUMBER}&country_code=NG`;
    const options = {
        method: 'GET',
    }
    const response = await fetch(url, options)
    .then(res => res.json())
    .catch(err => {
        console.error(({
            error: err
        }))
    })
    console.log('Response', response)
    res.json(response)
})


module.exports = router