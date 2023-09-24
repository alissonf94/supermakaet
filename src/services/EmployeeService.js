const employeeRepositories =  require("../repositories/EmployeeRepositories")
const AppError = require('../errors/AppError')
const bcrypt = require('bcrypt')

async function createEmployeeService({nameEmployee, cpf, email, password}) 
{
    if(!nameEmployee || !email || !cpf || !password )
        throw new AppError('Submit all fields for registration', 400)
    
    const foundEmployee = await employeeRepositories.findByEmailEmployeeRepository(email)

    if(foundEmployee) throw new AppError('Employee already exists', 409)
         
    await employeeRepositories.createEmployeeRepository(
    {
        nameEmployee, 
        cpf, 
        email, 
        password
    }
    )
    return ({message: "Employee successfully create!"})
}
    
async function findByIdEmployeeService(employeeId)
{
    const employee = await employeeRepositories.findByIdEmployeeReposytory(employeeId)
    
    if(!employee)
        throw new AppError('Employee not found',400)

    return employee
}

async function findAllEmployeeService()
{
    const employees = await employeeRepositories.findAllEmployeepository();
    
    if(employees.length == 0)
        throw new AppError('There are no employee', 400)
    
    return employees
}

async function updateByIdEmployeeService( employeeId, {nameEmployee, cpf, email, password})
{   
    const employeeAlreadyExist = await employeeRepositories.findByIdEmployeeReposytory(employeeId)

    if(!employeeId && !nameEmployee && !password && !cpf && !email)
        throw new AppError('Submit all fields for registration', 400)

    if(!employeeAlreadyExist){
        throw new AppError('Employee not found', 404)
    }

    password = await bcrypt.hash(password,10)
    
    await employeeRepositories.updateByIdEmployeeRepository(
        employeeId,   
        nameEmployee, 
        cpf, 
        email, 
        password
    )

    return {message: "Employee successfully updated!" }
}

async function deleteByIdEmployeeService (employeeId){
    const employeeAlreadyExist = await employeeRepositories.findByIdEmployeeReposytory(employeeId)

    if(!employeeId)
        throw new AppError('Submit all fields for registration', 400)

    if(!employeeAlreadyExist){
        throw new AppError('Employee not found', 404)
    }

    await employeeRepositories.deleteByIdEmployeeRepository(employeeId)

    return {message: 'Employee successfully delete!'}
}
module.exports =
{
   createEmployeeService,
   updateByIdEmployeeService,
   findAllEmployeeService,
   findByIdEmployeeService,
   findAllEmployeeService,
   deleteByIdEmployeeService
}