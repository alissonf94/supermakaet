const Employee = require("../models/EmployeeModel")


const findByEmailEmployeeRepository = (email) =>
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

const findByIdEmployeeReposytory = (employeeId) => 
{ 
    return Employee.findById({_id: employeeId}) 
}

const updateByIdEmployeeRepository = ( employeeId, nameEmployee, cpf, email, password) => 
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

const deleteByIdEmployeeRepository= (employeeId) =>
{
   return Employee.deleteOne({_id: employeeId})
}

module.exports = {
   deleteByIdEmployeeRepository,
   findAllEmployeepository,
   findByEmailEmployeeRepository,
   findByIdEmployeeReposytory,
   createEmployeeRepository,
   updateByIdEmployeeRepository
}