'use strict'
//É neste arquivo que tudo vai começar. Este é o "public static void main" do nosso servidor NodeJS
const mongoose = require('mongoose')

require("dotenv").config();
const jwt = require('jsonwebtoken');


//Conecta com o mongoose. Deve ser feita somente uma única vez
mongoose.connect('mongodb://127.0.0.1:27017/superMarket')

const express = require('express')

//Cria a nossa aplicação
const app = express()
const port = process.env.port || 3000

//Importa os roteadores
const productRouter = require('./src/routers/productRouter')
const clientRouter =require('./src/routers/clientRouter')
const employeeRouter = require("./src/routers/employeeRouter")
const buyRouter = require("./src/routers/buyRouter")
const authRouter = require("./src/routers/authRouter")
const promotionRouter = require("./src/routers/promotionRouter")

//Define tudo o que será usado na nossa aplicação.
//Perceba que os roteadores precisam ser declarados como use para poderem de fato serem usados pela nossa app
app.use(express.json())
app.use(clientRouter)
app.use(productRouter)
app.use(employeeRouter)
app.use(authRouter)
app.use(buyRouter)
app.use(promotionRouter)

app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`)
})