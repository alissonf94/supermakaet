const shoppingCardService = require("../services/ShoppingCardService")

async function addItem(req,res){
    const clientId = req.userId
    const productId = req.params.id
    const {quantity} = req.body.quantity

    const result =  await shoppingCardService.addItem(clientId,productId,{quantity})

    res.status(201).send(result)
}

module.exports = {
    addItem
}