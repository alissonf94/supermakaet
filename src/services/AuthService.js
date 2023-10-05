const AppError = require("../errors/AppError");
const userRepository = require("../repositories/UserRepositories")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 async function loginService(email, password){
    const user = await userRepository.findByEmailUsertRepository(email);

    if(!user){
        throw new AppError("User or Password not found", 403)
    }

    valididyPassword(password, user.password)

    const userLogin = {
        id: user._id,
        userType: user.userRole
    }
    
    const token = jwt.sign({userLogin},process.env.SECRET,{ expiresIn: 86400 })
    
    return {token, type: userLogin.userType} 
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