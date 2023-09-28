const AppError = require('../errors/AppError')

function verifyEmployee(req, res, next){
    if(req.userId == 'employee') return next()
    
    throw new AppError('not authorized', 403)    
}

module.exports = verifyEmployee