require("dotenv").config();
const mongoose  = require('mongoose');
// const validator = require('validator')
console.log('im waiting')
 mongoose.connect(
   process.env.MONGO_URI
).then(
    (response)=>{
        console.log('Connection done')
    }
).catch(
    (reject)=>{
        console.log('Rejected=>', reject)
    }
)
console.log('waiting over')

const savee = new mongoose.Schema({
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

    const Productt = mongoose.model('formdetailss',savee);

    module.exports = Productt;