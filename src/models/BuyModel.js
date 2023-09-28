const mongoose = require('mongoose')
const Schema =  mongoose.Schema


const buySchema = new Schema({
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ItemModel',
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

/*buySchema.pre('save', async function (next){
    const client = await clienService.findByIdClientService(this.client)
    
    const buys = client.buys
   
    buys.push(this._id)
    
    client.set(buys)
    
    await client.save();

    return next();
});*/

module.exports = mongoose.model("BuyModel",buySchema)

