const BuyService = require("../services/BuyService")

async function registerBuyController (req, res){
    const clientId = req.userId
    const result = await BuyService.registerBuyService(req.userId)

    res.status(201).send(result)
}

async function findBuysByClientIdController(req, res){
    const clientId = req.userId
    const result = await BuyService.findBuysClientIdBuysServices(clientId)

    return res.status(200).json(result)
}

module.exports = {
   registerBuyController,
   findBuysByClientIdController
}