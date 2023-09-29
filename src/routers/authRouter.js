'use strict'
const express = require("express")
const authRouter = express.Router()
const authController = require("../controllers/AuthController")

authRouter.route("/login")
.post((req,res)=> authController.loginController(req,res))

module.exports = authRouter