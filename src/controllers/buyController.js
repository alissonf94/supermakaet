const BuyService = require("../services/BuyService")

async function registerBuyController (req, res){
    const clientId = req.userId
    const result = await BuyService.registerBuyService(req.userId)

    res.status(201).send(result)
}

module.exports = {
   registerBuyController
}