const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const ShoppingCardSchema = new Schema({
    items:
    [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemModel',
    }],
    
    client: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientModel',
        require: true,
    },
    
})
module.exports = mongoose.model("ShoppingCardModel", ShoppingCardSchema)