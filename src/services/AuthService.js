const AppError = require("../errors/AppError");
const clientRepository = require("../repositories/ClientRepositories")
const employeeRepository = require("../repositories/EmployeeRepositories")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 async function loginService(email, password,userType){
    let user;
    
    if(userType == "client"){
        user = await clientRepository.findByEmailClientRepository(email)
    }
    else if(userType == "employee"){
        user = await employeeRepository.findByEmailEmployeeRepository(email)
    }

    else {
        throw new AppError('Error Login', 403)
    }

    if(!user){
        throw new AppError("User or Password not found", 403)
    }

    valididyPassword(password, user.password)

    const userLogin = {
        id: user._id,
        userType: userType
    }
    
    const token = jwt.sign({userLogin},process.env.SECRET,{ expiresIn: 86400 })
    
    return token 
}

function valididyPassword (passwordLogin, passwordUser){
    const result = bcrypt.compareSync(passwordLogin, passwordUser)

    if(!result){
        throw new AppError("User or Password not found", 403)
    }
}

module.exports = {
    loginService
}