const promotionService = require('../services/PromotionService')

async function createPromotionController(req,res){
    const {nameProduct, valueProduct} = req.body
    const result = await promotionService.createPromotionService(nameProduct, valueProduct)

    res.status(201).json(result)
}

async function findAllPromotionsControlle (req, res){
    const result = await promotionService.findAllPromotionsService()
    res.status(200).json(result)
}

async function deleteByIdPromotionController(req, res){
    const productId = req.params.id
    const result = await promotionService.deleteByIdService(productId)

    res.status(200).json(result)
}
module.exports = {
    createPromotionController,
    findAllPromotionsControlle,
    deleteByIdPromotionController
}