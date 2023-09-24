const itemRepositories = require("../repositories/ItemRepositories")
const productService = require("../services/ProductService")
const {AppError} = require('../errors/AppError')

async function createService(productId, quantity){
    const product = productService.findByIdProductService(productId)
    
    if(product.quantityProduct < quantity)
        throw new AppError('Quantity of products unavailable')

    return await itemRepositories.createItem(product, quantity)
}

module.exports = {
    createService
}