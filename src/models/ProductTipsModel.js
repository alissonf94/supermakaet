const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productTips = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel',
        require:true
    },

    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        require: true
    
    },
    
    valuePromotion:{
        type: Number
    }
})

module.exports = mongoose.model("productTipsModel",productTips)