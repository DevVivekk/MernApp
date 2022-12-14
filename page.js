const express= require('express');
const upload = require('express-fileupload');
const path = require('path')
const app = express();
const dirpath = path.join(__dirname,'pages')
console.log(dirpath)
app.use(upload())
app.get('/uploads',(req,res)=>{
    res.sendFile(dirpath +'/htt.html')
})

app.post('/uploaded',(req,res)=>{
   if(req.files){
    console.log(req.files)
    var file = req.files.file
    var filename = file.name
    console.log(filename);
    file.mv("./uploads/"+filename,function(err){
        if(err){
            res.send('error');
        }else{
            res.send('File uploaded successfully!')
        }
    })
    res.sendFile(dirpath +'/htt.html')
   }
})
app.listen(4000)