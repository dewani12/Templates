const userModel = require('../models/user.model')
const {createUser} = require('../services/user.service')
const {validationResult} = require('express-validator')

module.exports.registerUser = async(req,res,next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname, email, password} = req.body

    const ob = new userModel()
    const hashedPassword = await ob.hashPassword(password)

    const user = await createUser({
        firstname: fullname.firstname, 
        lastname: fullname.lastname, 
        email, 
        password:hashedPassword
    })

    const token = user.generateAuthToken()

    res.status(201).json({token, user})
}