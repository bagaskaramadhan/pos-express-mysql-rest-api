const sequelize = require('sequelize')
const db = require('../lib/appMySQL/app')
const config = require('../lib/config')

const productTable = db.define(config.productTable, {
    id: {
        type: sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING
    },
    category_id: {
        type: sequelize.INTEGER
    },
    stock: {
        type: sequelize.INTEGER
    },
    description: {
        type: sequelize.STRING
    },
    created_at: {
        type: sequelize.TIME
    },
    updated_at: {
        type: sequelize.TIME
    },
}, { timestamps: false })

module.exports = productTable