const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    bday: { type: String, required: true },
    cep: { type: Number, required: true },
    password: { type: String, required: true }
})
module.exports = mongoose.model("ClientModel", clientSchema)