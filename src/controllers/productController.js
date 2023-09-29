const { result } = require('lodash')
const productModel= require('../models/ProductModel')
const productService = require('../services/ProductService')

async function createProductController (req, res){
    const {nameProduct, typeProduct, price,description, validity, quantityProduct} = req.body   
    const result = await productService.createProductService(
        {
            nameProduct, 
            typeProduct, 
            price,  
            description, 
            validity,
            quantityProduct
        }
    )
        res.status(201).send(result)
}

async function findAllProductController (req, res){
    const result = await productService.findAllProductService()

    res.status(200).json(result)
}

async function findByIdProduct(req, res){
    const productId =   req.params.id
    const result = await productService.findByIdProductService(productId)
    
    res.status(200).send(result)
}

async function updateProductController (req, res){
    const productId = req.params.id
    const {nameProduct, typeProduct, price,description, validity, quantityProduct} = req.body

    const result = await productService.updateProductService(
        productId,
        {
            nameProduct, 
            typeProduct, 
            price, 
            description, 
            validity,
            quantityProduct
        }
    )

    res.status(201).send(result)
}

async function deleteByIdProductController(req, res){
    const productId = req.params.id
    const result = await productService.deleteByIdProductService(productId)
    
    res.status(200).send(result)
}

module.exports = {
    createProductController,
    findAllProductController,
    findByIdProduct,
    updateProductController, 
    deleteByIdProductController,
}