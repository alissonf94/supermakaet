require("dotenv").config();
const jwt = require('jsonwebtoken');
const model = require("../models/clientModel")
const employeeModel = require("../models/employeeModel")

function authMiddllwares (req, res, next){
    if(req.url == "/api/clients" && req.method == "POST"){
        return next();
    }
    else if (req.url == "/api/auth/login"){
        return next();
    }
    else if(req.url == "/api/employees" && req.method == "POST"){
        return next();
    }
    
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({ message: "The token was not informed!" });
    }

    //divide o header em duas partes
    const parts = authHeader.split(" "); //["Bearer", "asdasdasdadsadasd"]

    if(parts.length !== 2){
        return  res.status(401).send({ message: "Invalid token!" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ message: "Malformatted Token!" });

    jwt.verify(token, process.env.SECRET, async (err, decoded)=>{
        if(err){
            return res.status(401).send({ message: "Invalid token!" });
        }
        if(decoded.userLogin.userType == "client"){
            const user = await model.findById(decoded.userLogin.id);
            req.userId = decoded.userLogin.id

            if(!user || !user.id)
                return res.status(401).send({ message: "Invalid token!" });

            if(req.url == "/api/products" && req.method == "GET"){
                return next()
            }
            else if(req.url == "/api/buys"){
                return next()
            }
            else if(req.url == "/api/promotion" && req.method == "GET"){
                return next();
            }
            else if(!(req.url == "/api/client")){
                return res.status(403).send({ message: "not authorized" });
            } 
            
        }
        else{
            const user = await employeeModel.findById(decoded.userLogin.id)
            req.userId = decoded.userLogin.id

            if(!user || !user.id)
                return res.status(401).send({ message: "Invalid token!" });
        }
        
        return next();
    })
}

module.exports = authMiddllwares