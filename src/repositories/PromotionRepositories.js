const promotion = require('../models/PromotionModel')

const createPromotionRepository = (productId) => {
    return promotion.create(
        {
            product: productId
        }
    )
}

const findAllPromotionsRepository = ()=>{
    return promotion.find({}).populate('product')
}

const findByProductPromotion = (productId)=>{
    return promotion.findOne(
        {
            product: productId
        }
    )
}

const deleteFindByIdRepository = (promotionId)=>{
    return promotion.deleteOne({_id: promotionId})
}

module.exports = {
    createPromotionRepository,
    findAllPromotionsRepository,
    findByProductPromotion,
    deleteFindByIdRepository
}