require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db')
const routes = require('./routes')
const cors = require('cors');

const port = 5555

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/api', routes)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})