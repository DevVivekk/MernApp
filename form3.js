require("dotenv").config();
const mongoose = require('mongoose')
console.log('database 2 connecting...')
mongoose.connect(
    process.env.MONGO_URI
 ).then(
     (response)=>{
        console.log('Connection to db3 success')
     }
 ).catch(
     (reject)=>{
         console.log('Rejected=>', reject)
     }
 )

 const apiSchema = new mongoose.Schema({
    ip:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        default: Date.now
    }
 })
 const commentModel =  mongoose.model('Apiis' , apiSchema)

 module.exports = commentModel;