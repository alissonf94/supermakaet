const productTipsRepository = require('../repositories/ProducTipsRepositories')
const userService = require ("./UserService")
const buyService = require("../services/BuyService")
const productService = require('./ProductService')
const itemService = require("./ItemService")
const { map } = require('lodash')
const AppError = require('../errors/AppError')

async function createProductTipsService (clientId){
    const buys = await buyService.findBuysClientIdBuysServices(clientId)

    let idItems  = await getIdItems(buys)

    let typesProducts = await getTypesProducts(idItems)
    
    let fqTypes = await calculateFrequencyProductTypes(typesProducts)

    let typeMax = await  getTypemax(fqTypes)
  
    const productId = await getProductIdProductTips(typeMax)
    
    const valueProductTips = await calculateValueProductTips(productId)
    
    await productTipsRepository.createProducTipsRepository(productId, clientId, valueProductTips)

    return ({message: 'Promotion successfully create!'})
}

 function getIdItems (buys){
    let idItems = []
    
    buys.map( buy => 
        {
            let items = buy.items
            items.map(  item => 
                {
                   idItems.push(item._id)
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

 async function getProductIdProductTips(typeMax)
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

async function calculateValueProductTips(productId)
{
    let valuePromotion;
    
    const product = await productService.findByIdProductService(productId)

    valuePromotion = product.price * 0.91;
    return valuePromotion
}

async function findAllProductsTipsService(){
    const productsTips = await productTipsRepository.findAllProducTipsRepository()

    if(productsTips.length < 0){
        throw new AppError('there are no promotions', 404)
    }
    
    return productsTips
}

async function findByClientIdProductTipsService(clientId){
    const productTips = await productTipsRepository.findByClientIdProducTipsRepository(clientId)

    if(productTips.length == 0){
        return findAllPromotionService()
    } 
    return productTips
}

async function deleteByIdProducTipsService(id){
    await productTipsRepository.deleteByIdProductTipsRepository(id)
    return ({message: "success when deleting a promotion"})
}

module.exports =
{
    createProductTipsService,
    findAllProductsTipsService, 
    findByClientIdProductTipsService,
    deleteByIdProducTipsService
}