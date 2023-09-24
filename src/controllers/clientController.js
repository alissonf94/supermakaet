const ClientModel = require('../models/ClientModel')
const clientService = require("../services/ClientService")

async function createClientController(req, res){
    const {nameClient, cpf, email, password } = req.body
    const result = await clientService.createClientService({nameClient, cpf, email, password})
    res.status(201).json({ message: `O cliente foi adicionado com sucesso!` })
}

async function findAllClientsController(req, res){
    const clients = await clientService.findAllClientsService()
    res.status(201).send(clients)
}

async function findByIdClientController(req, res){
    const result = await clientService.findByIdClientService(req.params.id)
    res.status(200).send(result)
}

async function deleteByIdClientController(req, res){
    const result = await clientService.deleteByIdClientService(req.params.id)
    res.status(200).send(result)
}

async function updateByIdClientController(req, res){
    const clientId = req.params.id;    
    const result = await clientService.updateByIdClientService(clientId, req.body)
    
    res.status(201).send(result)
}

module.exports = {
    createClientController,
    updateByIdClientController,
    findAllClientsController,
    findByIdClientController,
    deleteByIdClientController
}