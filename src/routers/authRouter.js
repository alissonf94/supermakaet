'use strict'
const express = require("express")
const authRouter = express.Router()
const authController = require("../controllers/authController")

authRouter.route("/api/auth/login")
.post((req,res)=> authController.login(req,res))

module.exports = authRouter