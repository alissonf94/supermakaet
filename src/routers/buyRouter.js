'use strict'

const express = require('express')
const buyRouter = express.Router()
const buyController = require('../controllers/BuyController')

buyRouter.route('/api/buys').post((req,res)=> buyController.registerBuyController(req,res))
.get((req,res)=> buyController.findBuysByClientIdController(req, res))


module.exports = buyRouter