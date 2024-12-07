const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const http = require('http')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.routes')

const server = http.createServer(app)

const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// connect to mongoDB
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

app.get('/',(req,res)=>{
    res.send('Template for Nodejs Project')
})

app.use('/users', userRoutes)

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})