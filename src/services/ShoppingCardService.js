const shoppingCartRepositories = require('../repositories/ShoppingCartRepositories')
const clientService = require('../services/ClientService')
const productService = require('../services/ProductService')
const itemService = require('../services/ItemService')
const AppError = require("../errors/AppError")

async function createShoppingCard(clientId)
{
    const id = clientId
    
    await shoppingCartRepositories.createShopping(id)
}

async function addItemService(clientId, productId, quantity)
{   
    if(!quantity){
        throw new AppError('Submit all fields for registration', 400)
    }
    
    const shoppingCard =  await shoppingCartRepositories.findByClientIdShoppingCardRepository(clientId)
    
    const item = await itemService.createService(productId, quantity)
    
    shoppingCard.items.push(item)

    await shoppingCard.save()

    return ({message: "Product added to the cart successfully"})
}

async function deleteByIdItemShoppingCardService(itemId, clientId){
    const shoppingCard =  await shoppingCartRepositories.findByClientIdShoppingCardRepository(clientId)
    
    const item = await itemService.findByIdItemService(itemId)
    
    const items = shoppingCard.items
    shoppingCard.items = await removeItem(items, item)
    
    await shoppingCard.save()
    await itemService.deleteByIdItemService(itemId)
   
    return ({message: "Item successfully deleted from cart."})
}

async function findByClientIdShoppingCardService(clientId){
    return await shoppingCartRepositories.findByClientIdShoppingCardRepository(clientId)
}

function removeItem(items, item){
    for( let i = 0; i < items.length; i++){
        
        if(items[0]._id.toHexString() == item._id){
            items.splice(i,1)
        }
    }
    return items
}

module.exports = {
    createShoppingCard,
    addItemService,
    deleteByIdItemShoppingCardService,
    findByClientIdShoppingCardService
}