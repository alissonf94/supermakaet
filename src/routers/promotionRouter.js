const express = require('express')
const PromotionRouter = express.Router()
const promotionController = require("../controllers/PromotionController")
const verifyEmployee = require('../middlewares/VerifyEmployee')
const { reset } = require('nodemon')

PromotionRouter.route('/api/promotions').post(verifyEmployee, (req, res)=> promotionController.createPromotionController(req, res)).get((req, res)=> promotionController.findAllPromotionsControlle(req, res))

PromotionRouter.route('/api/promotion/:id').delete(verifyEmployee, (req, res)=> promotionController.deleteByIdPromotionController(req, res))

module.exports = PromotionRouter