const db = require('mysql2')
const config = require('../config')
require('dotenv').config()

const connections = db.createConnection({
    host: config.dbHost,
    user: config.dbUsername,
    database: config.dbName,
    password: config.dbPassword
})
module.exports = connections