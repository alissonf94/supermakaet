const Client = require("../models/ClientModel")


const findByEmailClientRepository = (email) =>
{ 
    return Client.findOne({email: email})
}

const createClientRepository = ({nameClient, cpf, email, password}) => 
{
    return Client.create({
        nameClient,
        cpf,
        email,
        password
    });
}

const findAllClientRepository = () =>
{ 
    return Client.find({}).select(["-__v", "-_id"]) 
};

const findByIdClientReposytory = (idClient) => 
{ 
    return Client.findById({_id : idClient}) 
}

const updateClientRepository = (idClient, nameClient, cpf, email, password) => 
{
    return Client.updateOne(
        {
            _id: idClient
        }, 
        {
            nameClient,
            cpf,
            email,
            password
        })
}

const deleteClientRepository= (clientId) =>
{
   return Client.deleteOne({_id: clientId})
}

module.exports = {
    findByEmailClientRepository,
    findByIdClientReposytory,
    findAllClientRepository,
    createClientRepository,
    updateClientRepository,
    deleteClientRepository
}