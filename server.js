const Productt = require('./form')
const commentModel = require('./form2')
const apiSchema = require('./form3')
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
app.delete('/api/:id',async(req,res)=>{
   const id = req.params.id
  const deleting = await Productt.findByIdAndDelete({_id:id})
  console.log(deleting);
  res.status(201).json(deleting);
})



//lets do server programming for comments database...

app.post('/postcomments',async(req,res)=>{
   const {name,comment}  = req.body
   if(!name || !comment){
    return res.status(422).json({error: 'Form cant be empty!'})
   }
    try{
     const userexists  = await commentModel.findOne({name:name})
     if(userexists){
        return res.status(404).json({error:'Oops! Please Fill Correctly!'})
    }

    const user_data = new commentModel ({name,comment});
    await user_data.save();
    console.log(user_data);
    res.status(201).json({message: 'User posted comment successfully!'});

 }catch(err){
   res.status(400).json(err);
   }
})


app.post('/postapis',async(req,res)=>{
   const {ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network}  = req.body
    try{
    const user_dataaa = new apiSchema ({ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network});
    await user_dataaa.save();
    console.log(user_dataaa);
    res.status(201).json({message: 'success!'});

 }catch(err){
   res.status(400).json(err);
   }
})


app.delete('/ddata',async(req,res)=>{
   const deleteCommm = await apiSchema.deleteMany({});
   res.status(201).send(deleteCommm);
})

app.delete('/dall',async(req,res)=>{
   const deleteComm = await commentModel.deleteMany({});
   res.status(201).send(deleteComm);
})

app.get('/capi',async(req,res)=>{
   try{
      const findComments =  await commentModel.find({})
      res.status(201).json(findComments);
   }catch(e){
      res.status(400).send(e)
      console.log(e);
   }
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