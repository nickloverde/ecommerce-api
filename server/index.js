const express = require('express')
const app = express()
const getProducts = require('./getProducts')

app.get('/api/products', getProducts.getProducts)

app.get('/api/products/:product_id', getProducts.getSingleProduct)

app.listen(5000, () => console.log("test"))

