const itemRepositories = require("../repositories/ItemRepositories")
const productService = require("../services/ProductService")
const AppError = require('../errors/AppError')

async function createService(productId, quantity){
    const product = await productService.findByIdProductService(productId)
    
    const valueItem = product.price * quantity
    
    if(product.quantityProduct < quantity) throw new AppError('Quantity of products unavailable',400)

    return await itemRepositories.createItemRepository(product, quantity, valueItem)
}

async function deleteByIdItemService(itemId){
    return await itemRepositories.deleteByIdItemRepository(itemId)
}

async function findByIdItemService(itemId){
    const item = await itemRepositories.findByIdItemRepository(itemId)

    if(!item)throw new AppError('Item not fount',404)

    return item
}

module.exports = {
    createService,
    deleteByIdItemService,
    findByIdItemService
}