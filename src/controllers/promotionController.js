const productModel = require('../models/ProductModel')
const buyModel = require('../models/BuyModel')
const clientModel = require("../models/ClientModel")
const promotionService = require('../services/PromotionService')
const { map } = require('lodash')

async function createPromotioControlller (req, res){
    const clientId = req.params.id
    
    const result =  await promotionService.createPromotionService(clientId)

    res.status(201).send(result)
}

async function findAllPromotionsController(req, res){
    const result = await promotionService.findAllPromotionService()
    
    res.status(200).sen(result)
}

async function findByClientIdPromotionController (req, res){
    const clientId = req.userId
    
    const result = await promotionService.findByClientIdPromotionService(clientId)

    res.status(200).send(result)
}

async function deleteByIdPromotionController(req, res){
    const clientId = req.params.id
    const result = promotionService.deleteByIdPromotionService(clientId)
    res.status(200).send(result)
}

module.exports = {
    createPromotioControlller,
    deleteByIdPromotionController,
    findAllPromotionsController,
    findByClientIdPromotionController   
}


