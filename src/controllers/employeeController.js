const EmployeeModel = require('../models/EmployeeModel');
const employeeRouter = require('../routers/EmployeeRouter');
const EmployeeService = require('../services/EmployeeService')

async function createEmployeeController(req, res){
    const {nameEmployee, cpf, email, password } = req.body
    const result = await EmployeeService.createEmployeeService({nameEmployee, cpf, email, password})

    res.status(201).json({ message: 'O funcionario foi adicionado com sucesso!' })    
}

async function updateByIdEmployeeController(req, res){
    const employeeId = req.params.id;      
    const result = await EmployeeService.updateByIdEmployeeService(employeeId, req.body)
    
    res.status(201).send(result)
}

async function findAllEmployeeController(req, res){
    const result = await EmployeeService.findAllEmployeeService()
       
    res.status(200).send(result)
}

async function findByIdEmployeeController(req, res){
    const employeeId = req.params.id
    const result = await EmployeeService.findByIdEmployeeService(employeeId)
        
    res.status(200).send(result)
}

async function deleteByIdEmployeeController(req, res){
    const employeeId = req.params.id;
    const result = await EmployeeService.deleteByIdEmployeeService(employeeId)

    res.status(200).send(result)
}

module.exports = {
    createEmployeeController,
    updateByIdEmployeeController,
    findAllEmployeeController,
    findByIdEmployeeController,
    deleteByIdEmployeeController
}