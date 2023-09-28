const { uniqueId } = require("lodash")
const shoppingCardService = require("../services/ShoppingCardService")

async function addItemController(req,res)
{
    const clientId = req.userId
    const productId = req.params.id
    const quantity = req.body.quantity

    const result =  await shoppingCardService.addItemService(clientId,productId,quantity)

    res.status(201).json(result)
}

async function deleteByIdItemShoppingCardController(req, res)
{
    const clientId = req.userId
    const itemId = req.params.id

    const result = await shoppingCardService.deleteByIdItemShoppingCardService(itemId, clientId)
    
    res.status(200).send(result)
}

async function findByClientIdShoppingCardController(req, res){
    const clientId = req.userId
    const result = await shoppingCardService.findByClientIdShoppingCardService(clientId)
    console.log(result)
    return res.status(200).json(result)
}

module.exports = {
    addItemController,
    deleteByIdItemShoppingCardController,
    findByClientIdShoppingCardController
}