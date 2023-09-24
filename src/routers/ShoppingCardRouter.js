'use strict'
const express = require('express')
const ShoppingCardRouter = express.Router()
const shoppingCardController = require('../controllers/ShoppingCardController')

ShoppingCardRouter.route('/api/shoppingCard/:id')
.put((req,res) => shoppingCardController.addItem(req,res))

module.exports = ShoppingCardRouter