const AppError = require('../errors/AppError')

const errorHandling = async (err, req, res, next)=>
{   
    if(err){
        if(err instanceof AppError){
            return res.status(err.statusCode).json(
                {
                    message: err.message
                }
            )
        }
    
        return  res.status(500).json(
            {
                message: err.message
            }
        )
    }

    else{
        return next()
    }
    
}

module.exports = errorHandling
