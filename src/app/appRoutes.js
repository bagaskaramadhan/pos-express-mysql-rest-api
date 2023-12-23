const express = require('express')
const { GetAllProduct } = require('./allRoutes/get/getAllProduct')
const { PostCreateProduct } = require('./allRoutes/post/postCreateProduct')
const { PutUpdateProduct } = require('./allRoutes/put/putUpdateProduct')
const { DeleteProductById } = require('./allRoutes/delete/deleteProductById')
const route = express.Router()

const path = "/api/v1/"
route
    .get(`${path}product`, GetAllProduct)
    .post(`${path}product`, PostCreateProduct)
    .put(`${path}product/:id`, PutUpdateProduct)
    .delete(`${path}product/:id`, DeleteProductById)

module.exports = route