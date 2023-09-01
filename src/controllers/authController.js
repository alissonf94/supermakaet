const clientModel = require("../models/clientModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const employeeModel = require("../models/employeeModel")

module.exports = {
    login: async (req, res) =>{
        try {
            let user;
            if(req.body.userType == "client"){
                user = await clientModel.findOne({ cpf:req.body.cpf  })
            }
            else{
                user = await employeeModel.findOne({cpf: req.body.cpf})
            }

            if(!user){
                return res.status(402).send({message: "User or Password not found"})
            }

            const passwordIsvalid = bcrypt.compareSync(req.body.password, user.password)
            
            if(!passwordIsvalid){
                return res.status(404).send({message : "User or password not found"})
            }
            
            const userLogin = {
                id: user._id,
                userType: req.body.userType
            }
            
            const token = jwt.sign({userLogin},process.env.SECRET,{ expiresIn: 86400 })
            res.status(200).send(token)
        } 
        
        catch (error) {
            res.status(500).send(error.mensagen)
        }
       
    }
 }