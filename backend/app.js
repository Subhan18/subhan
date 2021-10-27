const express = require("express")
const mongoose=require("mongoose")
const app=express()
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("conntected to mongo")
})
mongoose.connection.on('error',()=>{
    console.log("err conntecting",err)
})

require('./models/post')

app.use(express.json())
app.use(require('./routes/post'))



app.listen(5000,()=>{console.log("server is running on port 5000")})







