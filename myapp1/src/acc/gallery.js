import React, { useEffect, useState } from 'react'
import Vivekk from '../Gallery/vivekrishi.jpg'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Comments from './comments';
function Gallery() {
const [data,setData] = useState({name:'',comment:''})
const[add,setAdd] = useState(false);
const [comment,setComment] = useState([''])
let  name,value;
const handleInput = (e)=>{
    name=e.target.name;
    value= e.target.value;
    setData({...data,[name]:value})
} 

const postComment = async(e)=>{
  e.preventDefault();
  const {name,comment} = data;
 const sendComment =  await fetch('/postcomments',{
    method:'POST',
    headers:{
      'Accept':'application/json',
    'Content-Type':'application/json'
  },
  body:JSON.stringify({name,comment})})
  if(sendComment.status===404){
    window.alert(`${name} already exists!`)
  }else if(sendComment.status===400){
    window.alert('Please fill correctly!')
  }else{
    window.alert(`Thanks ${name} for posting your comments!`);
  }
  fetchCommenst();
}


   const fetchCommenst = async()=>{
     await fetch('/capi')
    .then((resp)=>resp.json()
    .then((result)=>{
      setComment(result)
    }))
   }

   useEffect(()=>{
    fetchCommenst();
   },[])
  return (
    <div className='gallery'>
    <div className='gallery-part1'><img  className='gallery-image' src={Vivekk} alt='img' />
    <p className='caption'>Embracing the pure love of Rishikesh..💖</p><hr/>
     <Button  onClick={()=>setAdd(!add)}  style={{ marginLeft: 15 }} type='submit'  size='large' variant="contained">Add Comment</Button>
    </div>
    
       <div className='view-comments'> 
      <h5 className='allinonee' style={{textAlign:'center',color:'green',textDecoration:'underline'}}>Comment Section</h5><br />
      {
        comment.map((item,id)=>
          <Comments key={id} value={item} />
      )
      }
     
     </div>
    {
      add?<div className='add-comment'>
    <br /><TextField className='formfield' name='name' value={data.name} onChange={handleInput}  InputProps={{ style: { fontSize: 17 } }}
        InputLabelProps={{ style: { fontSize: 18 } }} id="outlined-basic" size="small" label="Name" placeholder='Enter your name' variant="outlined" /> <br /><br/>
         <TextField className='formfield' name='comment' value={data.comment} onChange={handleInput}  InputProps={{ style: { fontSize: 17 } }}
        InputLabelProps={{ style: { fontSize: 18 } }} id="outlined-basic" size="small" label="Comment" placeholder='Enter your comment' variant="outlined" /> <br />
         <br /><Button onClick={postComment} style= { { marginLeft: 10 }} type='submit'  size='large' variant="outlined">Post</Button>
    </div>:null
    }
  
    </div>
  )
}

export default Gallery