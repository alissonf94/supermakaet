const ShoppingCart = require("../models/ShoppingCartModel")

const createShopping = (clientId) =>{
    return ShoppingCart.create({client: clientId})
}

const findByClientIdShoppingCardRepository = async (clientd)=>{
    return await ShoppingCart.findOne({client: clientd}).populate(
        {
            path: 'items',
            populate:{
                path: 'product',
                model: 'ProductModel'
            },
        }
        ).exec()
}

module.exports ={
    createShopping,
    findByClientIdShoppingCardRepository,

}