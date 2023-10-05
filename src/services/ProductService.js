const productRepositories =  require("../repositories/ProductRepositories")
const AppError = require('../errors/AppError')
const bcrypt = require('bcrypt')

async function createProductService({nameProduct, typeProduct, price,description, validity, quantityProduct}) 
{
    if(!nameProduct || !typeProduct || !price || !description || !validity || !quantityProduct)
        throw new AppError('Submit all fields for registration', 400)
    
    const foundProduct = await productRepositories.findByNameProductRepository(nameProduct)

    if(foundProduct) throw new AppError('Product already exists', 409)
         
    await productRepositories.createProductRepository(
    {
        nameProduct: nameProduct, 
        typeProduct: typeProduct,
        price: price,
        description: description,
        validity: validity,
        quantityProduct: quantityProduct
    }
    )
    return ({message: "Product successfully create!"})
}
    
async function findByIdProductService(productId)
{
    const product = await productRepositories.findByIdProductReposytory(productId)
    
    if(!product)
        throw new AppError('Product not found',400)

    return product
}

async function findAllProductService()
{
    const products = await productRepositories.findAllProductRepository();
    
    if(products.length == 0)
        throw new AppError('There are no employee', 400)
    
    return products
}

async function updateProductService( productId, {nameProduct, typeProduct, price, description, validity, quantityProduct})
{   
    const productAlreadyExist = await productRepositories.findByIdProductReposytory(productId)

    if(!productId || !nameProduct || !typeProduct || !price  || !description || !validity || !quantityProduct)
        throw new AppError('Submit all fields for registration', 400)

    if(!productAlreadyExist)
        throw new AppError('Product not found', 404)
    
    
    await productRepositories.updateProductRepository(
        productId,   
        nameProduct,
        typeProduct,
        price,
        description,
        validity,
        quantityProduct      
    )

    return {message: "Product successfully updated!" }
}

async function deleteByIdProductService (productId){
    const productAlreadyExist = await productRepositories.findByIdProductReposytory(productId)

    if(!productId)
        throw new AppError('Submit all fields for registration', 400)

    if(!productAlreadyExist){
        throw new AppError('Product not found', 404)
    }

    await productRepositories.deleteProductRepository(productId)

    return {message: 'Product successfully delete!'}
}

async function findByNameProductService(productName){
    return await productRepositories.findByNameProductRepository(productName)
}
module.exports =
{
  createProductService,
  updateProductService,
  findAllProductService,
  findByIdProductService,
  findByNameProductService,
  deleteByIdProductService
}