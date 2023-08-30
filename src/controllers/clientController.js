const ClientModel = require('../models/clientModel')

module.exports = {
    getClients: (req, res) => {
        ClientModel
            .find({}).select(["-__v", "-_id"]).then((result) => {
                res.status(200).json(result)
            }).catch(() => {
                res.status(500).json({ message: "Não foi possivel recupera os clientes" })
            })
    },
    deleteClientByMat: async (req, res) => {
        try {
            const result = await ClientModel.deleteOne({ _id: req.params.id })
            res.status(200).send({ message: "Cliente removido com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possível remover o cliente" })
        }
    },
    getClient: async (req, res) => {
        try {
            const result = await ClientModel.findById({ _id: req.params.id})
            res.status(200).send(result)
        }
        catch (err) {
            res.status(500).json({ message: "Não foi possivel retorna o cliente" })
        }
    },
    updateClient: async (req, res) => {
        try {
            const result = await ClientModel.updateOne({ cpf: req.body.cpf }, req.body)
            res.status(200).send({ message: "Cliente atualizado com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possível atualizar os dados" })
        }
    },
    createClient: async (req, res) => {
        try {
            const result = await ClientModel.create(req.body)
            res.status(201).json({ message: `O cliente ${result._doc.name} foi adicionado com sucesso!` })
        } catch (err) {
            res.status(500).json({ message: `Não foi possível adicionar o cliente ${req.body.client}` })

        }
    }
}