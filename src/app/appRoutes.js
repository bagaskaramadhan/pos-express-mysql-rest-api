const express = require('express')
const { GetAllProduct } = require('./allRoutes/get/getAllProduct')
const { PostCreateProduct } = require('./allRoutes/post/postCreateProduct')
const route = express.Router()

route
    .get("/api/v1/product", GetAllProduct)
    .post("/api/v1/product", PostCreateProduct)

module.exports = route