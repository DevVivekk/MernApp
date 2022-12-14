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
         console.log('im rejected db 2=>', reject)
     }
 )
const save = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    comment:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type: String,
        required:true
    }
});

    const Productt = mongoose.model('forms',save);

    module.exports = Productt;