const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const http = require('http')

const server = http.createServer(app)

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})

module.exports = app