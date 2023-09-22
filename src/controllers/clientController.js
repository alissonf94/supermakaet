const ClientModel = require('../models/ClientModel')
const clientService = require("../services/ClientService")

module.exports = {
    getClients: async (req, res) => {
        const clients = await clientService.findAllClientsService()
        res.status(201).send(clients)
    },
    deleteClientById: async (req, res) => {
       const result = await clientService.deleteByIdClient(req.params.id)
       res.status(200).send(result)
    },
    getClient: async (req, res) => {
        const result = await clientService.findByIdClientService(req.params.id)
        res.status(200).send(result)
    },
    updateClient: async (req, res) => {
        
        const clientId = req.params.id;
        
        const result = await clientService.updateClientService(clientId, req.body)
        
        res.status(201).send(result)
    },
    createClient: async (req, res) => {
        const {nameClient, cpf, email, password } = req.body
            
        const result = await clientService.createClientService({nameClient, cpf, email, password})

        res.status(201).json({ message: `O cliente foi adicionado com sucesso!` })
    }
}