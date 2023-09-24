const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const ItemSchema = new Schema({
    
    product: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel',
    },
    quantity: 
    {
        type: Number
    }   
})
module.exports = mongoose.model("ItemModel", ItemSchema)