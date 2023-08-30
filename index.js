'use strict'
//É neste arquivo que tudo vai começar. Este é o "public static void main" do nosso servidor NodeJS
const mongoose = require('mongoose')


//Conecta com o mongoose. Deve ser feita somente uma única vez
mongoose.connect('mongodb://127.0.0.1:27017/superMarket')

const express = require('express')

//Cria a nossa aplicação
const app = express()
const port = process.env.port || 3000

//Importa os roteadores
const productRouter = require('./src/routers/productRouter')
const clientRouter =require('./src/routers/clientRouter')

//Define tudo o que será usado na nossa aplicação.
//Perceba que os roteadores precisam ser declarados como use para poderem de fato serem usados pela nossa app
app.use(express.json())
app.use(productRouter)
app.use(clientRouter)

app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`)
})