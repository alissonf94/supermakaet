const mongoose = require('mongoose')
const Schema =  mongoose.Schema


const buySchema = new Schema({
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemModel',
    }],
    
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        require: true,
    },

    valueBuy:{
        type: Number
    }
})

module.exports = mongoose.model("BuyModel",buySchema)

