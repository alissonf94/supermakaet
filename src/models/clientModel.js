const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    nameClient: 
    { 
        type: String,
        require: true
    },

    cpf: 
    { 
        type: String, 
        required: true,
         unique: true 
    },

    email: 
    { 
        type: String, 
        required: true,
         unique : true 
    },

    password: 
    { 
        type: String, 
        required: true 
    },

    buys:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BuyModel',
            require: false
        }
    ],
 
})

clientSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

module.exports = mongoose.model("ClientModel", clientSchema)