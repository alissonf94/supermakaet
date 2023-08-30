const productModel= require('../models/productModel')

module.exports = {
    getProducts: (req, res) => {
        productModel
        .find({}).select(["-__v", "-_id"]).then((result) => {
            res.status(200).json(result)
        }).catch(() => {
            res.status(500).json({ message: "Não foi possivel recupera os produtos" })
        })
    },
    deleteProductByName: async (req, res) => {
        try {
            const result = await productModel.deleteOne({ _id: req.params.id})
            res.status(200).send({ message: "Produto removido com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possível remover o produto" })
        }
    },
    getProduct: async (req, res) => {
        try {
            const result = await productModel.findById({ _id: req.params.id})
            res.status(200).send(result)
        }
        catch(err){
            res.status(500).json({ message: "Não foi possivel retorna os produtos" })
        }
    },
    updateProduct: async (req, res) => {
        try {
            const result = await productModel.updateOne({ product: req.body.product }, req.body)
            res.status(200).send({ message: "Produto atualizado com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possível atualizar os dados" })
        }
    },
    createProduct: async (req, res) => {
        try {
            const result = await productModel.create(req.body)
            res.status(201).json({ message: `O produto ${result} foi adicionado com sucesso!` })
        } catch (err) {

            /**
             * Mesma lógica do caso anterior só que aqui nós temos uma response que deu errado
             */
            res.status(500).json({ message: `Não foi possível adicionar o produto ${req.body.product}` })

        }
    }
}