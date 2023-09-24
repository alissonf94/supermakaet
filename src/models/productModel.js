const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema(
{
    nameProduct:
    {
        type: String, 
        required : true,
        unique:true
    },
    typeProduct:
    {
        type: String, 
        required: true
    },
    price:
    {
        type: Number,
        required: true
    },
    promotionalPrice:
    {
        type: Number, 
        required: false
    },
    description:
    {
        type: String,
        required: true
    },
    validity: 
    {
        type: String,
        required: true
    },
    quantityProduct: 
    {
        type: Number, 
        require: true
    }
})

module.exports = mongoose.model("ProductModel",productSchema)
 