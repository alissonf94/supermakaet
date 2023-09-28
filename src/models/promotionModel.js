const mongoose = require('mongoose')

const Schema = mongoose.Schema

const promotionShema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel',
        require:true
    },

    client: {
       
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientModel',
        require: true
    
    },
    
    valuePromotion:{
        type: Number
    }
})

module.exports = mongoose.model("promotionModel",promotionShema)