require("dotenv").config();
const mongoose = require('mongoose')
console.log('database 2 connecting...')
mongoose.connect(
    process.env.MONGO_URI
 ).then(
     (response)=>{
        console.log('Connection to db2 success')
     }
 ).catch(
     (reject)=>{
         console.log('Rejected=>', reject)
     }
 )

 const CommentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        default: Date.now
    }
 })
 const commentModel =  mongoose.model('Comments' , CommentSchema)

 module.exports = commentModel;