const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userShema = new Schema({
    name: {
        type: String,
        require: true
    },

    email:
    {
        type: String,
        required: true,
        unique: true
    },

    password:
    {
        type: String,
        required: true
    },

    userRole:
    {
        type: String,
        required: true
    },
})

userShema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

module.exports = mongoose.model('UserModel', userShema)