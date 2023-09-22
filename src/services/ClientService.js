const clientRepositories =  require("../repositories/ClientRepositories")
const AppError = require('../errors/AppError')
const bcrypt = require('bcrypt')

async function createClientService({nameClient, cpf, email, password}) 
{
    if(!nameClient || !email || !cpf || !password )
        throw new AppError('Submit all fields for registration', 400)
    
    const foundUser = await clientRepositories.findByEmailClientRepository(email)

    if(foundUser) throw new AppError('Client already exists', 409)
         
    await clientRepositories.createClientRepository(
    {
        nameClient, 
        cpf, 
        email, 
        password
    }
    )
}

async function findByIdClientService(idClient)
{
    const client = await clientRepositories.findByIdClientReposytory(idClient)
    
    if( client.cpf == undefined)
        throw new AppError('Client not found',400)

    return client
}

async function findAllClientsService()
{
    const clients = await clientRepositories.findAllClientRepository();

    if(clients.length == 0)
        throw new AppError('There are no clients', 400)
    
    return clients
}

async function updateClientService( clientId, {nameClient, cpf, email, password})
{   
    const clientAlreadyExisit = await clientRepositories.findByIdClientReposytory(clientId)

    if(!clientId && !nameClient && !password && !cpf && !email)
        throw new AppError('Submit all fields for registration', 400)

    if(!clientAlreadyExisit){
        throw new AppError('Client not found', 404)
    }

    password = await bcrypt.hash(password,10)
    
    await clientRepositories.updateClientRepository(
        clientId,   
        nameClient, 
        cpf, 
        email, 
        password
    )

    return {message: "Client successfully updated!" }
}

async function deleteByIdClient (clientId){
    const clientAlreadyExisit = await clientRepositories.findByIdClientReposytory(clientId)

    if(!clientId)
        throw new AppError('Submit all fields for registration', 400)

    if(!clientAlreadyExisit){
        throw new AppError('Client not found', 404)
    }

    await clientRepositories.deleteClientRepository(clientId)

    return {message: 'Client successfully delete!'}
}
module.exports =
{
    createClientService, 
    findByIdClientService, 
    findAllClientsService,
    updateClientService,
    deleteByIdClient
}