const BuyRepositories = require("../repositories/BuyRepositories")
const ShoppingCardService = require("../services/ShoppingCardService")
const itemService = require("../services/ItemService")
const AppError = require("../errors/AppError")
const userService = require('../services/UserService')

async function registerBuyService(clientId){
    const shoppingCard = await ShoppingCardService.findByClientIdShoppingCardService(clientId)
    
    const items = shoppingCard.items
    await updateStock(items)
    
    const valueBuy = await calculateValueBuy(items)
    
    let buy = await BuyRepositories.registerBuyRepository(clientId, items, valueBuy)
    
    return ({message: "Buy successfully register!"})
}

function calculateValueBuy(items){
    let value = 0

    items.map( item =>
    {
        value += item.valueItem
    }
    )

    return value;
}

async function findByIdBuyService(buyId){
    const buy = await BuyRepositories.findByIdBuyRepository(buyId)

    if(!buy){
        throw new AppError('Buy not found', 404)
    }

    return buy
}

async function updateStock (items){
    for (let item of items){
        const seacherItem =  await itemService.findByIdItemService(item._id.toHexString())
        
        const product = seacherItem.product

        if(product.quantityProduct < seacherItem.quantity){
            throw new AppError('Product Unavailable', 400)
        }

        product.quantityProduct -= seacherItem.quantity

        product.save()
    }
}

async function findBuysClientIdBuysServices(clientId){
    const buys = await BuyRepositories.
    
    findBuysByClientIdRepository(clientId)

    return buys
}

module.exports = {
    registerBuyService, 
    findByIdBuyService,
    findBuysClientIdBuysServices
}