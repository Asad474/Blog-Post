const express = require('express')
const body_parser = require('body-parser')
const blogroutes = require('./routes/blogroutes')
const connDB = require('./config/db')
require('dotenv').config()

const app = express()
connDB()

app.set('view engine', 'ejs')
app.use(body_parser.urlencoded({extended : true}))
app.use(express.static('public'))

app.use('/', blogroutes)


app.listen(8080, () =>{
    console.log('Server is running at port 8080!!!')
})