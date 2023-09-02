const express = require('express')
const promotionRouter = express.Router()
const promotionController = require("../controllers/promotionController")

promotionRouter.route('/api/promotion').get((req,res)=> promotionController.getPromotionByUser(req,res)).post((req,res)=> promotionController.createPromoyion(req,res))

module.exports = promotionRouter