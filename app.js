const express = require("express")
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('./config/passport-setup')
const mongoose = require("mongoose");
const keys = require('./config/keys')

const app = express()

//Set up view engine
app.set('view engine', 'ejs');

//MongoDB
mongoose.connect(keys.mongoDB.dbURI, ()=>{
    console.log('MongoDB Connected')
})

app.get('/', (req,res)=>{
    res.render('home');
})

//setup routes
app.use('/auth', authRoutes)

 app.listen(4000, ()=>{
     console.log("Listening to port 4000")
 }) 