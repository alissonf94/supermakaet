const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authService = require("../services/AuthService")

async function loginController(req, res){
    const {email, password,userType} = req.body
    const result = await authService.loginService(email, password, userType)

    res.status(201).json(result)
}
module.exports = {
    loginController
 }