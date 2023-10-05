const productTipsService = require('../services/ProductTipsService')

async function createProducTipsControlller (req, res){
    const clientId = req.params.id
    
    const result =  await productTipsService.createProductTipsService(clientId)

    res.status(201).json(result)
}

async function findAllProductTipsController(req, res){
    const result = await productTipsService.findAllProductsTipsService()
    
    res.status(200).json(result)
}

async function findByClientIdProductTipsController (req, res){
    const clientId = req.userId
    
    const result = await productTipsService.findByClientIdProductTipsService(clientId)

    res.status(200).json(result)
}

async function deleteByIdProducTipsController(req, res){
    const clientId = req.params.id
    
    const result = await productTipsService.deleteByIdProducTipsService(clientId)
    
    res.status(200).json(result)
}

module.exports = {
    createProducTipsControlller,
    deleteByIdProducTipsController,
    findAllProductTipsController,
    findByClientIdProductTipsController   
}


