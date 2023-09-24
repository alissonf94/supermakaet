const ShoppingCart = require("../models/ShoppingCartModel")

const createShopping = (clientId) =>{
    return ShoppingCart.create({client: clientId})
}

const findByClientIdShoppingCardRepository = (clientd)=>{
    return ShoppingCart.findOne({client: clientd})
}

module.exports ={
    createShopping,
    findByClientIdShoppingCardRepository
}