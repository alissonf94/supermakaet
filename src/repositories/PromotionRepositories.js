const promotion = require("../models/PromotionModel")

const createPromotionRepository = (productId, clientId, valuePromotion) =>
{
    promotion.create(
        {
            product: productId,
            client: clientId,
            valuePromotion: valuePromotion
        }
    )
}

const findAllPromotionRepository = ()=>
{
    return promotion.find({})
}

const findByClientIdPromotionRepository = (clientId)=>{
    return promotion.find({client: clientId})
}

const deleteByIdPromotionRepository =  (id) => {
    return promotion.deleteOne({_id: id})
}

module.exports = {
    createPromotionRepository,
    findAllPromotionRepository,
    findByClientIdPromotionRepository,
    deleteByIdPromotionRepository
}