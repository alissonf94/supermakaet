const shoppingCartRepositories = require('../repositories/ShoppingCartRepositories')
const clientService = require('../services/ClientService')
const productService = require('../services/ProductService')
const itemService = require('../services/ItemService')
const { AppError} = require("../errors/AppError")

async function createShoppingCard(clientEmail)
{
    const client = clientService.findByEmailClientService(clientEmail)
    
    const clientId = foundUser.id
    
    await shoppingCartRepositories.createShopping(clientId)
}

async function addItem(clientId, productId, quantity)
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

module.exports = {
    createShoppingCard,
    addItem
}