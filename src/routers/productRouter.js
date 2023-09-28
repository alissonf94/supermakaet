'use strict'
const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/ProductController')
const verifyEmployee = require('../middlewares/VerifyEmployee')

productRouter.route('/api/products')
.get((req, res) => productController.findAllProductController(req, res))
.post(verifyEmployee, (req, res) => productController.createProductController(req, res))


productRouter.route('/api/product/:id')
.get((req, res) => productController.findByIdProduct(req, res))
.delete(verifyEmployee, (req, res) => productController.deleteByIdProductController(req, res))
.put(verifyEmployee, (req, res) => productController.updateProductController(req, res))

module.exports = productRouter