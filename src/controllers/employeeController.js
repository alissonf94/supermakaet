const userService = require("../services/UserService")

async function createEmployeeController(req, res){
    const {name, email, password } = req.body
    const result = await userService.createUserService({name, email, password},"employee")

    res.status(201).json(result)    
}

async function updateByIdEmployeeController(req, res){
    const employeeId = req.userId;   
    const {name, email, password } = req.body  
    const result = await userService.updateByIdUserService(employeeId,{name, email, password},"employee")
    
    res.status(201).json(result)
}

async function findAllEmployeeController(req, res){
    const result = await userService.findAllUsersService()
       
    res.status(200).json(result)
}

async function findByIdEmployeeController(req, res){
    const employeeId = req.params.id
    const result = await userService.findByIdUsertService(employeeId)
        
    res.status(200).json(result)
}

async function deleteByIdEmployeeController(req, res){
    const employeeId = req.params.id;
    const result = await userService.deleteByIdUserService(employeeId)

    res.status(200).json(result)
}

module.exports = {
    createEmployeeController,
    updateByIdEmployeeController,
    findAllEmployeeController,
    findByIdEmployeeController,
    deleteByIdEmployeeController
}