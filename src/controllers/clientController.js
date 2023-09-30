const userService = require("../services/UserService")

async function createClientController(req, res){
    const {name, cpf, email, password } = req.body
    
    const result = await userService.createUserService({name, cpf, email, password},"client")
    
    res.status(201).json({ message: "success when creating the user" })
}

async function findAllClientsController(req, res){
    const clients = await userService.findAllUsersService()
    res.status(201).json(clients)
}

async function findByIdClientController(req, res){
    const result = await userService.findByIdUsertService(req.params.id)
    res.status(200).json(result)
}

async function deleteByIdClientController(req, res){
    const result = await userService.deleteByIdUserService(req.params.id)
    res.status(200).json(result)
}

async function updateByIdClientController(req, res){
    const clientId = req.userId;    
    
    const result = await userService.updateByIdUserService(clientId, req.body, 'client')
    
    res.status(201).json(result)
}

module.exports = {
    createClientController,
    updateByIdClientController,
    findAllClientsController,
    findByIdClientController,
    deleteByIdClientController
}