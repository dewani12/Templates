const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const http = require('http')

const mongoose = require('mongoose')

const server = http.createServer(app)

const port = process.env.PORT || 3000

// connect to mongoDB
try {
    mongoose.connect(process.env.DB_CONNECT)
    console.log('connected to db')
} catch (err) {
    console.log(err);
}

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})

module.exports = app