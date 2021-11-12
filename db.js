const { Pool } = require('pg')
const epok = new Pool({
    user: process.env.EPOK_USERNAME,
    host: process.env.EPOK_HOSTNAME,
    database: process.env.EPOK_DB,
    password: process.env.EPOK_PASSWORD,
    port: process.env.EPOK_PORT,
})
const ladok = new Pool({
    user: process.env.EPOK_USERNAME,
    host: process.env.EPOK_HOSTNAME,
    database: process.env.EPOK_DB,
    password: process.env.EPOK_PASSWORD,
    port: process.env.EPOK_PORT,
})
const ideal = new Pool({
    user: process.env.EPOK_USERNAME,
    host: process.env.EPOK_HOSTNAME,
    database: process.env.EPOK_DB,
    password: process.env.EPOK_PASSWORD,
    port: process.env.EPOK_PORT,
})

module.exports = {
    epok, ladok, ideal
}