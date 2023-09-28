const BuyRepositories = require("../repositories/BuyRepositories")
const ShoppingCardService = require("../services/ShoppingCardService")
const itemService = require("../services/ItemService")
const AppError = require("../errors/AppError")
const clienService = require('../services/ClientService')
async function registerBuyService(clientId){
    const shoppingCard = await ShoppingCardService.findByClientIdShoppingCardService(clientId)
    
    const items = shoppingCard.items
    await updateStock(items)
    
    const valueBuy = await calculateValueBuy(items)
    
    let buy = await BuyRepositories.registerBuyRepository(clientId, items, valueBuy)
    
    const client = await clienService.findByIdClientService(clientId)
    
    const buys = client.buys
   
    buys.push(buy)
    
    await clienService.updateBuysByIdService(clientId, buys)
    
    shoppingCard.items = []
    await shoppingCard.save()
    
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


module.exports = {
    registerBuyService, 
    findByIdBuyService
}