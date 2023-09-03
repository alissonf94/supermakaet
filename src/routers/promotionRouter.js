const express = require('express')
const promotionRouter = express.Router()
const promotionController = require("../controllers/promotionController")

promotionRouter.route('/api/promotions').post((req, res) => promotionController.createPromoyion(req, res))
.get((req,res) => promotionController.getPromotions(req,res))

promotionRouter.route('/api/promotionUser').get((req, res) => promotionController.getPromotionByUser(req, res))
promotionRouter.route('/api/promotion/:id').delete((req,res) => promotionController.deleteById(req,res))
module.exports = promotionRouter