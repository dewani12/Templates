const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

module.exports.authUser = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(401).json({mssg: 'Unauthorized'})
    }

    try {
        const decodedId = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decodedId._id)

        req.user=user
        return next()
    } catch (error) {
        return res.status(401).json({mssg: 'Unauthorized'})
    }
}