const promotionRepositories = require('../repositories/PromotionRepositories')
const userService = require ("../services/UserService")
const productService = require('../services/ProductService')
const itemService = require("../services/ItemService")
const { map } = require('lodash')
const AppError = require('../errors/AppError')

async function createPromotionService (clientId){
    const client = await userService.findByIdUsertService(clientId)
    
    const buys = client.buys

    let idItems  = await getIdItems(buys)

    let typesProducts = await getTypesProducts(idItems)
    let fqTypes = await calculateFrequencyProductTypes(typesProducts)

    let typeMax = await  getTypemax(fqTypes)
  
    const productId = await getProductIdPromotion(typeMax)
    
    const valuePromotion = await calculateValuePromotion(productId)
    
    await promotionRepositories.createPromotionRepository(productId, clientId, valuePromotion)

    return ({message: 'Promotion successfully create!'})
}

 function getIdItems (buys){
    let idItems = []
    
    buys.map( buy => 
        {
            let items = buy.items
            items.map(  item => 
                {
                   idItems.push(item.toHexString())
                }
            )
        }
    )

    return idItems
}

async function getTypesProducts (idItems){
    let typesProducts = []
   
    for(let idItem of idItems)
    {
        const product = (await itemService.findByIdItemService(idItem)).product
            
        let typeProduct = product.typeProduct
        typesProducts.push(typeProduct)
    }  
    return typesProducts
}

function calculateFrequencyProductTypes(typesProducts){
    let fqTypes = new Map()

    for (let i = 0; i < typesProducts.length; i++) 
    {
        if (!fqTypes.has(typesProducts[i])) 
        {
            fqTypes.set(typesProducts[i], 1)
        }

        else 
        {
            fqTypes.set(typesProducts[i], fqTypes.get(typesProducts[i]) + 1)
        }
    }

    return fqTypes
}

function getTypemax (fqTypes){
    let mapOrd = Array.from(fqTypes)

    let typemax = mapOrd[0][0]
    let number = mapOrd[0][1]
    
    for (let i = 1; i < mapOrd.length; i++) 
    {
        if (mapOrd[i][1] > number) 
        {
            number = mapOrd[i][1];
            typemax = mapOrd[i][0]
        }
    }

    return typemax
}

 async function getProductIdPromotion(typeMax)
{
    let productsByType = []
    const products = await productService.findAllProductService()

    for(let product of products) 
    {
        if(product.typeProduct == typeMax)
        {
            productsByType.push(product)
        }
    }

    let index = Math.floor(Math.random() * productsByType.length);

    return productsByType[index]._id.toHexString()
}

async function calculateValuePromotion(productId)
{
    let valuePromotion;
    
    const product = await productService.findByIdProductService(productId)

    valuePromotion = product.price * 0.91;
    return valuePromotion
}

async function findAllPromotionService(){
    const promotions =await promotionRepositories.findAllPromotionRepository()

    if(promotions.length < 0){
        throw new AppError('there are no promotions', 404)
    }
    
    return promotions
}

async function findByClientIdPromotionService(clientId){
    const promotions = await promotionRepositories.findByClientIdPromotionRepository(clientId)

    if(promotions.length == 0){
        return findAllPromotionService()
    } 
    return promotions
}
async function deleteByIdPromotionService(id){
    await promotionRepositories.deleteByIdPromotionRepository(id)
    return ({message: "success when deleting a promotion"})
}
module.exports =
{
    createPromotionService,
    findAllPromotionService, 
    findByClientIdPromotionService,
    deleteByIdPromotionService
}