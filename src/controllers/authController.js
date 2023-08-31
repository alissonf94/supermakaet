const clientModel = require("../models/clientModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = {
    login: async (req, res) =>{
        try {
            const  user = await clientModel.findOne({ cpf:req.body.cpf  })
            
            if(!user){
                return res.status(402).send({message: "User or Password not found"})
            }

            const passwordIsvalid = bcrypt.compareSync(req.body.password, user.password)
            
            if(!passwordIsvalid){
                return res.status(404).send({message : "User or password not found"})
            }
            const cpf = req.body.cpf
            const token = jwt.sign({cpf},process.env.SECRET,{ expiresIn: 86400 })
            res.status(200).send(token)
        } 
        
        catch (error) {
            res.status(500).send(error.mensagen)
        }
       
    }
 }