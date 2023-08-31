const EmployeeModel = require('../models/employeeModel')

module.exports = {
    getEmployees: (req, res) => {
        EmployeeModel
            .find({}).select(["-__v", "-_id"]).then((result) => {
                res.status(200).json(result)
            }).catch(() => {
                res.status(500).json({ message: "Não foi possivel recupera os funcionarios" })
            })
    },
    deleteEmployeeByMat: async (req, res) => {
        try {
            const result = await EmployeeModel.deleteOne({ _id: req.params.id })
            res.status(200).send({ message: "Funcionario removido com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possível remover o funcionario" })
        }
    },
    getEmployee: async (req, res) => {
        try {
            const result = await EmployeeModel.findById({ _id: req.params.id })
            res.status(200).send(result)
        }
        catch (err) {
            res.status(500).json({ message: "Não foi possivel retorna o funcionario" })
        }
    },
    updateEmployee: async (req, res) => {
        try {
            const result = await EmployeeModel.updateOne({ cpf: req.body.cpf }, req.body)
            res.status(200).send({ message: "Funcionario atualizado com sucesso!" })
        } catch (err) {
            res.status(500).json({ message: "Não foi possível atualizar os dados" })
        }
    },
    createEmployee: async (req, res) => {
        try {
            const result = await EmployeeModel.create(req.body)
            res.status(201).json({ message: `O funcionario ${result._doc.name} foi adicionado com sucesso!` })
        } catch (err) {
            res.status(500).json({ message: `Não foi possível adicionar o funcionario ${req.body.employee}` })

        }
    }
}