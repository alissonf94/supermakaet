const Product = require("../models/ProductModel")

const findByNameProductRepository = (nameProduct) =>
{ 
    return Product.findOne({nameProduct: nameProduct})
}

const createProductRepository = ({nameProduct, typeProduct, price,description, validity, quantityProduct}) => 
{
    return Product.create({
        nameProduct: nameProduct,
        typeProduct: typeProduct,
        price: price,
        description: description,
        validity: validity,
        quantityProduct: quantityProduct
    });
}

const findAllProductRepository = () =>
{ 
    return Product.find({}).select(["-__v"]) 
};

const findByIdProductReposytory = (productId) => 
{ 
    return Product.findById({_id: productId}) 
}

const updateProductRepository = (productId, nameProduct, typeProduct, price, description, validity, quantityProduct) => 
{
    return Product.updateOne(
        {
            _id: productId
        }, 
        {
           nameProduct,
           typeProduct,
           price,
           description,
           quantityProduct
        })
}

const deleteProductRepository= (productId) =>
{
   return Product.deleteOne({_id: productId})
}

module.exports = {
  findByNameProductRepository,
  findAllProductRepository,
  findByIdProductReposytory,
  createProductRepository,
  updateProductRepository,
  deleteProductRepository
}