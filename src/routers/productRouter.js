'use strict'
const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController')

productRouter.route('/api/products')
.get((req, res) => productController.getProducts(req, res))
.post((req, res) => productController.createProduct(req, res))
.put((req, res) => productController.updateProduct(req, res))
productRouter.route('/api/product/:id')
.get((req, res) => productController.getProduct(req, res))
.delete((req, res) => productController.deleteProductByName(req, res))

module.exports = productRouter