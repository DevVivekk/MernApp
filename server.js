const Productt = require('./form')
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();
require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config({path: '.env'})

//console.log(filepath);
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());

app.post('/connect',async (req,res)=>{
   const {name,comment,number,email}  = req.body
   if(!name || !comment || !number || !email){
    return res.status(422).json({error:'Plz fill the form correctly!'})
   }
    try{
     const userexists  = await Productt.findOne({email:email})
     if(userexists){
        return res.status(404).json({error:'Oops! Please Fill Correctly!'})
    }

    const user_data = new Productt ({name,comment,number,email});
    await user_data.save();
    console.log(user_data);
    res.status(201).json({message: 'User registered successfully!'});

 }catch(err){
   res.status(400).json(err);
   }
})

app.get('/apidata',async(req,res)=>{
   const findData = await Productt.find({})
   res.status(201).json(findData);
})
app.delete('/dapi',async(req,res)=>{
   const deletedata = await Productt.deleteMany({})
   console.log(deletedata);
   res.status(201).json(deletedata);
})
if(process.env.NODE_ENV ==="production"){
   app.use(express.static(path.join(__dirname,"./myapp1/build")));
  app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'./myapp1','build','index.html'));
  })
}

//lets see

const PORT = process.env.PORT || 4000
app.listen(PORT)
console.log(`I'm listening at PORT ${PORT}`)