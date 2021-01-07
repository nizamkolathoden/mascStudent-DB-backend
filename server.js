const express = require('express');
const app = express();

const DB = require('./config/DB')

//env
const dot = require('dotenv');
dot.config({ path: './config/key.env' })

const Port = process.env.PORT

//start DB
DB()

//use json format in server
app.use(express.json()) 

//adding routers

app.use('/auth',require('./routes/auth'))

//listening the server
app.listen(Port,()=>console.log(`\u{1F525}\u{1F680} server running on ${process.env.NODE_ENV} in Port ${Port} \u{1F525}\u{1F680}\u{1F525} `))