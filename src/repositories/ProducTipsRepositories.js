const productTips = require("../models/ProductTipsModel")

const createProducTipsRepository = (productId, clientId, valuePromotion) =>
{
    productTips.create(
        {
            product: productId,
            client: clientId,
            valuePromotion: valuePromotion
        }
    )
}

const findAllProducTipsRepository = ()=>
{
    return productTips.find({})
}

const findByClientIdProducTipsRepository = (clientId)=>{
    return productTips.find({client: clientId})
}

const deleteByIdProductTipsRepository =  (id) => {
    return productTips.deleteOne({_id: id})
}

module.exports = {
    createProducTipsRepository,
    findAllProducTipsRepository,
    findByClientIdProducTipsRepository,
    deleteByIdProductTipsRepository
}