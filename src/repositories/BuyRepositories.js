const buy = require("../models/BuyModel")

const registerBuyRepository = (clinteId, items, valueBuy) =>{
    return buy.create({
        client: clinteId,
        items: items,
        valueBuy: valueBuy
    })
}

const findByIdBuyRepository = (buyId) =>{
    return buy.findById(buyId).populate('items')
}

module.exports = {
    registerBuyRepository,
    findByIdBuyRepository
}