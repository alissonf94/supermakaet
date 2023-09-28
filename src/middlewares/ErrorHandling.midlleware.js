const AppError = require('../errors/AppError')

const errorHandling = async (err, req, res, next)=>
{
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

module.exports = errorHandling
