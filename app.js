require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT
const prefixRouter = require('./routes')

app.use(cors())
app.use('/prefix', prefixRouter)

app.listen(port, () => {
    console.log(`Port on ${port}`)
})


