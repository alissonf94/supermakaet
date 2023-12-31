'use strict'
//É neste arquivo que tudo vai começar. Este é o "public static void main" do nosso servidor NodeJS
require("express-async-errors")
const mongoose = require('mongoose')

require("dotenv").config();
const jwt = require('jsonwebtoken');


//Conecta com o mongoose. Deve ser feita somente uma única vez
mongoose.connect('mongodb://127.0.0.1:27017/superMarket')

const express = require('express')
const cors = require('cors');
//Cria a nossa aplicação
const app = express()
const port = process.env.port || 3333

//Importa os roteadores
const productRouter = require('./src/routers/ProductRouter')
const clientRouter =require('./src/routers/ClientRouter')
const employeeRouter = require("./src/routers/EmployeeRouter")
const buyRouter = require("./src/routers/BuyRouter")
const authRouter = require("./src/routers/AuthRouter")
const productTips = require("./src/routers/ProductTipsRouter")
const shoppingCardRouter = require("./src/routers/ShoppingCardRouter")
const promotionRouter = require('./src/routers/PromotionRouter')
const authMiddlware = require("./src/middlewares/Auth.middleware")
const  AppError = require("./src/errors/AppError")

const erroHandling = async (err, req, res, next)=>
{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
          message: err.message
        })
    }

    return  res.status(500).json({
        message: err.message}
    )
}
//Define tudo o que será usado na nossa aplicação.
//Perceba que os roteadores precisam ser declarados como use para poderem de fato serem usados pela nossa app
app.use(express.json())
app.use(cors())
app.use(authMiddlware)
app.use(clientRouter)
app.use(productRouter)
app.use(employeeRouter)
app.use(authRouter)
app.use(buyRouter)
app.use(productTips)
app.use(shoppingCardRouter)
app.use(promotionRouter)
app.use(erroHandling)

app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`)
})

const corsOptions = {
    origin: 'http://localhost:3000', // Permitir solicitudes solo desde este dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204, // Devuelve un estado 204 No Content para las opciones de CORS
};

app.use(cors(corsOptions))

