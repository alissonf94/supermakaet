'use strict'
const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/ProductController')

productRouter.route('/api/products')
.get((req, res) => productController.findAllProductController(req, res))
.post((req, res) => productController.createProductController(req, res))


productRouter.route('/api/product/:id')
.get((req, res) => productController.findByIdProduct(req, res))
.delete((req, res) => productController.deleteByIdProductController(req, res))
.put((req, res) => productController.updateProductController(req, res))

module.exports = productRouter