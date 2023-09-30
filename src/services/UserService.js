const userRepositories = require("../repositories/UserRepositories")
const shoppingCardService = require("./ShoppingCardService")
const AppError = require('../errors/AppError')
const bcrypt = require('bcrypt')

async function createUserService({name, email, password},userRole) 
{
    if(!name || !email || !password )
        throw new AppError('Submit all fields for registration', 400)

    const foundUser = await findByEmailUserService(email)
         
    const user =  await userRepositories.createUserRepository(
        {
            name, 
            email, 
            password,
            userRole
        }
    )

    const usertId = user._id
    
    if(userRole == "client") await shoppingCardService.createShoppingCard(usertId)

    return ({message: 'User successfully create!'})
}

async function findByIdUsertService(id)
{
    const user = await userRepositories.findByIdUserRepository(id)
    
    if(!user )
        throw new AppError('User not found',400)

    return user
}

async function findAllUsersService()
{
    const users = await userRepositories.findAllUserRepository();
    
    if(users.length == 0)
        throw new AppError('There are no clients', 400)
    
    return users
}

async function updateByIdUserService( userId, { name, email, password}, userRole)
{   
    if(!userId || !name || !password || !email)
        throw new AppError('Submit all fields for registration', 400)
    
    const userAlreadyExisit = await findByIdUsertService(userId)
    
    const verifyEmail = await findByEmailUserUpdateService(email,userId);
    
    password = await bcrypt.hash(password,10)
    
    await userRepositories.updateUserRepository(
        userId,   
        name,  
        email, 
        password,
        userRole
    )

    return {message: "successfully!" }
}

async function deleteByIdUserService (userId){
    if(!userId)
        throw new AppError('Submit all fields for registration', 400)

    const userAlreadyExisit = await findByIdUsertService(userId)

    await userRepositories.deleteUserRepository(userId)

    return {message: 'Successfully'}
}

async function findByEmailUserService (email){
    const user = await userRepositories.findByEmailUsertRepository(email)

    if(user) throw new AppError('User already exists', 400)

    return true
}

async function findByEmailUserUpdateService(email, id){
    const user = await userRepositories.findByEmailUsertRepository(email)

    if(user){
        if(user._id != id){
            throw new AppError('User already exists', 400)
        }
    } 
    return true
}

async function updateBuysByIdService(id, buys){
    
    const user = await userRepositories.findByIdUserRepository(id)
    
    if(!user)
        throw new AppError('Client not found',400)

    const userUpadate = await userRepositories.updateBuysByIdRepository(id, buys)

    return userUpadate
}

module.exports =
{
    createUserService,
    updateByIdUserService,
    findAllUsersService,
    findByIdUsertService,
    deleteByIdUserService,
    updateBuysByIdService,
    findByEmailUserService
}