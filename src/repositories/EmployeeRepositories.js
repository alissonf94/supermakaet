const Employee = require("../models/EmployeeModel")


const findByEmailEmailRepository = (email) =>
{ 
    return Employee.findOne({email: email})
}

const createEmployeeRepository = ({nameEmployee, cpf, email, password}) => 
{
    return Employee.create({
        nameEmployee,
        cpf,
        email,
        password
    });
}

const findAllEmployeepository = () =>
{ 
    return Employee.find({}).select(["-__v", "-_id"]) 
};

const findByIdEmployeeReposytory = ( employeeId) => 
{ 
    return Employee.findById({_id : employeeId}) 
}

const updateEmployeeRepository = ( employeeId, nameEmployee, cpf, email, password) => 
{
    return Employee.updateOne(
        {
            _id:  employeeId
        }, 
        {
            nameEmployee,
            cpf,
            email,
            password
        })
}

const deleteEmployeeRepository= (employeeId) =>
{
   return Employee.deleteOne({_id: employeeId})
}

module.exports = {
   deleteEmployeeRepository,
   findAllEmployeepository,
   findByEmailEmailRepository,
   findByIdEmployeeReposytory,
   createEmployeeRepository,
   updateEmployeeRepository
}