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
         console.log('im rejected db=>', reject)
     }
 )

 const apiSchema = new mongoose.Schema({
    ip:{
        type:String,
    },
    latitude:{
        type:String,
    },
    city:{
        type:String,
    },
    longitude:{
        type:String,
    },
    network:{
        type:String
    },
    org:{
        type:String
    },
    postal:{
        type:String
    },
    region:{
        type:String
    },
    region_code:{
        type:String
    },
    asn:{
        type:String
    },
    country_area:{
        type:String
    },
    Date:{
        type:Date,
        default: Date.now
    }
 })
 const commentModel =  mongoose.model('Apiis' , apiSchema)

 module.exports = commentModel;