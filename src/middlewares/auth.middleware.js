require("dotenv").config();
const jwt = require('jsonwebtoken');


function authMiddllwares (req, res, next){
    if(req.url == "/api/clients" && req.method == "POST"){
        return next();
    }
    
    else if (req.url == "/login"){
        return next();
    }
    
    else if(req.url == "/api/employees" && req.method == "POST"){
        return next();
    }
    
    else if(req.url == "/api/products" && req.method == "GET"){
        return next();
    }

    else if(req.url == "/api/promotions" && req.method == "GET"){
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

    jwt.verify(token, process.env.SECRET, async (err, decoded)=>
    {
        if(err){
            return res.status(401).send({ message: "Invalid token!" });
        }
        
        req.userId = decoded.userLogin.id
        req.userType = decoded.userLogin.userType
    
        return next();
    }
    )
}

module.exports = authMiddllwares