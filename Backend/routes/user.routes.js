const express = require('express')
const router = express.Router()
const {registerUser} = require('../controllers/user.controller')
const {body} = require('express-validator')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First Name must be atleast 3 characters long'),
    body('password').isLength({min: 3}).withMessage('Password must be atleast 6 characters long')
],registerUser)

module.exports = router