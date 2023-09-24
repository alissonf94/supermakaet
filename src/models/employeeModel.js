const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const employeeShema = new Schema({
    nameEmployee: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

employeeShema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,10);
    next();
})

module.exports = mongoose.model("EmployeeModel", employeeShema)