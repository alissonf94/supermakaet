const BuyModel = require("../models/BuyModel")
const productModel = require("../models/productModel")


module.exports = {
    createBuy: async (req,res)=>{
        try{
            const buy = await BuyModel.create({client: req.userId})
            let products = req.body.products
            let valueBuy = 0;
           
            await Promise.all(products.map(async productId =>{
                const product = await productModel.findById({ _id: productId.productId })
                valueBuy += product.price
                if(!product){
                    res.status(402).send({message:"Product not found"})
                }

                let buyProduct = new productModel(product)

                buy.products.push(buyProduct)
            }))

            buy.valueBuy = valueBuy
            await buy.save()
            res.status(201).send({message:"Compra adicionada"})

        } catch (err){
            res.status(500).send(err)
        }
    },
    getBuy: async(req,res)=>{
        try {
            const buys =  await BuyModel.find({}).populate('products').populate('client')
            return res.status(200).json({buys})
        } catch (error) {
            return res.status(400).send({error: "Erro loading projects"})
        }
    }

}