const express = require('express')
const server = express()


const connections = require('./lib/appMySQL/app')
const config = require('./lib/config')

const cors = require('cors')

require('dotenv').config()

server.use(cors())


// server.get('/', (req, res) => {
//     res.send("Hello No API")
// })


connections.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`connected to ${config.dbName}`)
        server.listen(config.port, () => {
            console.log(`Server Running On ${config.port}`)
        })
    }
})