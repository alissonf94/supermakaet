const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const buySchema = new Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel',
    }],
    
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientModel',
        require: true,
    },

    valueBuy:{
        type: Number
    }
})
module.exports = mongoose.model("BuyModel",buySchema)