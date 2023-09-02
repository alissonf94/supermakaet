const productModel= require('../models/productModel')
const buyModel= require('../models/BuyModel')
const clientModel = require("../models/clientModel")
const promotionModel = require("../models/promotionModel")
const { map } = require('lodash')

module.exports = {
    createPromoyion:  async (req,res)=>{
        try{
            let buys = await buyModel.find({}).populate("client").populate("products")
            
            let buysClient = []
            buys.map(buy =>{
                if(buy.client.cpf == req.body.cpf){
                    buysClient.push(buy)
                }
            })

            let typesProducts = []
            buysClient.map(buy =>{
                buy.products.map(product=>{
                    typesProducts.push(product.typeProduct)
                })
            })
            
            let fqTypes = new Map()
            for(let i= 0; i<typesProducts.length;i++){
                if(!fqTypes.has(typesProducts[i])){
                    fqTypes.set(typesProducts[i],1)
                }
                else{
                    fqTypes.set(typesProducts[i],fqTypes.get(typesProducts[i]) + 1)
                }
            }
           

            let mapOrd = Array.from( fqTypes)
            
            let typemax = mapOrd[0][0]
            let number = mapOrd[0][1]
            for(let i = 1; i<mapOrd.length; i++){
                if(mapOrd[i][1] > number){
                    number = mapOrd[i][1];
                    typemax = mapOrd[i][0]
                }
            }
            
            let products = await productModel.find({})
            
            let productsByType = []
            products.map(product => {
                if(product.typeProduct == typemax){
                    productsByType.push(product)
                }
            })
            let index = Math.floor(Math.random() * productsByType.length );
            

            const clientPromotion = await clientModel.findOne({cpf:req.body.cpf})

            const promotion = await promotionModel.create({product:productsByType[index]._id, client: clientPromotion._id})
            
            
            let promotionalPrice = productsByType[index].price * 0.91;

            promotion.valuePromotion = promotionalPrice

            await promotion.save()
            res.status(200).send(productsByType[index])
        }
        catch(err){
            console.log(err.message)
            res.status(500).send(err)
        }
        
    },

    getPromotionByUser: (req,res)=>{

    }
}


