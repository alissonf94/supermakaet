const express = require('express')
const promotionRouter = express.Router()
const promotionController = require("../controllers/PromotionController")
const verifyEmployee = require('../middlewares/VerifyEmployee')

promotionRouter.route('/api/promotion/:id').post(verifyEmployee, (req, res) => promotionController.createPromotioControlller(req, res))

module.exports = promotionRouter