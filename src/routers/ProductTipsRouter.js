const express = require('express')
const productTipsRouter = express.Router()
const productTipsController = require("../controllers/ProductTipsController")
const verifyEmployee = require('../middlewares/VerifyEmployee')

productTipsRouter.route('/api/productTips/:id').post(verifyEmployee, (req, res) => productTipsController.createProducTipsControlller(req, res))

module.exports = productTipsRouter