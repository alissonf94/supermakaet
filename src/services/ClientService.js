const clientRepositories =  require("../repositories/ClientRepositories")
const shoppingCardService = require("../services/ShoppingCardService")
const AppError = require('../errors/AppError')
const bcrypt = require('bcrypt')

async function createClientService({nameClient, cpf, email, password}) 
{
    if(!nameClient || !email || !cpf || !password )
        throw new AppError('Submit all fields for registration', 400)
    
    const foundUser = await findByEmailClientService(email)
         
    const client =  await clientRepositories.createClientRepository(
        {
            nameClient, 
            cpf, 
            email, 
            password
        }
    )

    const clientId = client._id
    await shoppingCardService.createShoppingCard(clientId)

    return ({message: 'Client successfully create!'})
}

async function findByIdClientService(idClient)
{
    const client = await clientRepositories.findByIdClientReposytory(idClient)
    
    if(!client)
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

async function updateByIdClientService( clientId, {nameClient, cpf, email, password})
{   
    if(!clientId && !nameClient && !password && !cpf && !email)
        throw new AppError('Submit all fields for registration', 400)
    
    const clientAlreadyExisit = await findByIdClientService(clientId)
    
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

async function deleteByIdClientService (clientId){
    if(!clientId)
        throw new AppError('Submit all fields for registration', 400)

    const clientAlreadyExisit = await findByIdClientService(clientId)

    await clientRepositories.deleteClientRepository(clientId)

    return {message: 'Client successfully delete!'}
}

async function findByEmailClientService (email){
    const client = await clientRepositories.findByEmailClientRepository(email)

    if(client) throw new AppError('Client already exists', 400)

    return true
}
async function updateBuysByIdService(clientId, buys){
    
    const client = await clientRepositories.findByIdClientReposytory(clientId)
    
    if(!client)
        throw new AppError('Client not found',400)

    const clientUpadate = clientRepositories.updateBuysByIdRepository(clientId, buys)

    return clientUpadate
}
module.exports =
{
    createClientService, 
    findByIdClientService, 
    findAllClientsService,
    findByEmailClientService,
    updateByIdClientService,
    deleteByIdClientService,
    updateBuysByIdService
}