const User = require("../models/UserModel")

const findByEmailUsertRepository = (email) =>
{ 
    return User.findOne({email: email})
}

const createUserRepository = ({name, email, password, userRole}) => 
{
    return User.create({
        name,
        email,
        password,
        userRole
    });
}

const findAllUserRepository = () =>
{ 
    return User.find({userRole : "client"}).select(["-__v", "-_id"]) 
};

const findByIdUserRepository = (id) => 
{ 
    return User.findById({_id : id}) 
}

const updateUserRepository = (id, name,  email, password, userRole) => 
{
    return User.updateOne(
        {
            _id: id
        }, 
        {
            name,
            email,
            password,
            userRole
        })
}

const deleteUserRepository= (id) =>
{
   return User.deleteOne({_id: id})
}

const updateBuysByIdRepository= (id, buys) => {
    return User.findOneAndUpdate(
        {
            _id: id
        },
        {
            buys: buys
        },
        {
            new: true
        })
}

module.exports = {
    updateBuysByIdRepository,
    createUserRepository,
    findAllUserRepository,
    findByIdUserRepository,
    findByEmailUsertRepository,
    deleteUserRepository,
    updateUserRepository
}
