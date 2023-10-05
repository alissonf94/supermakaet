const AppError = require("../errors/AppError")
const promotionRepository = require("../repositories/PromotionRepositories")
const productService = require("../services/ProductService")

async function createPromotionService (productName, valueProduct){
    const product = await productService.findByNameProductService(productName)
    
    if(!product){
        throw new AppError("Product not found", 404)
    }

    const promotion = await promotionRepository.findByProductPromotion(product._id)

    if(promotion){
        throw new AppError("Produc already exists", 400)
    }

    product.price = valueProduct
    await product.save()

    await promotionRepository.createPromotionRepository(product._id)
    
    return ({message:"successfully"})
}

async function findAllPromotionsService(){
    return await promotionRepository.findAllPromotionsRepository()
}

async function deleteByIdService(productId){
    return await promotionRepository.deleteFindByIdRepository(productId)
}

module.exports = {
    createPromotionService,
    findAllPromotionsService,
    deleteByIdService
}