'use strict'
const express = require('express')
const ShoppingCardRouter = express.Router()
const shoppingCardController = require('../controllers/ShoppingCardController')

ShoppingCardRouter.route('/api/shoppingCard/:id')
.put((req,res) => shoppingCardController.addItemController(req,res))

ShoppingCardRouter.route('/api/shoppingCard').get((req, res) => shoppingCardController.findByClientIdShoppingCardController(req, res))
module.exports = ShoppingCardRouter