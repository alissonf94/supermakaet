'use strict'

const express = require('express')
const buyRouter = express.Router()
const buyController = require('../controllers/buyController')

buyRouter.route('/api/buys').post((req,res)=> buyController.createBuy(req,res)).get((req,res)=>buyController.getBuy(req,res))

module.exports = buyRouter