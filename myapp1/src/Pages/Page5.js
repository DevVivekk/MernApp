import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OP from '../Gallery/OP.jpg'
//import TextField from '@mui/material/TextField';

function Page5() {
  const [data,setData] = useState({name:'',comment:'',number:'',email:''});
  let name,value;
  const handleInput=(e)=>{
    name = e.target.name;
    value = e.target.value;
    setData({...data,[name]:value})
    //console.log(data);
  }
  const postData = async (e)=>{
    e.preventDefault();
    const {name,comment,number,email} = data;
    const response = await fetch('/connect',{
    method:"POST",
      headers:{
        "Accept": "application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,comment,number,email
      })

    });
    //const user_data = await response.json();
    //  console.log(user_data);
     if(response.status===422||!data){
      window.alert('Oops! Please fill correctly.')
     }else if(response.status===404){
      window.alert('Number & email are unique!')
     }else if(response.status===400){
      window.alert('Please recheck your form data.')
     }else{
      window.alert(`Thanks ${name} you will receive a confirmation mail shortly!`)
     }
  }
  return (
    <div className='page-5'>
    <div className='form-data'>
    <img src={OP} alt='#img' className='meme-img' />
    <h3 className='form-text-last'>Hello dear visitors, just fill the form and let me know some suggestions.</h3>
    </div>
    <div className='form-input'>
    <form className='formm' method='POST'>
    <TextField className='formfield' name='name' value={data.name} onChange={handleInput}  InputProps={{ style: { fontSize: 17 } }}
        InputLabelProps={{ style: { fontSize: 20 } }} id="outlined-basic" size="small" label="Name" placeholder='Enter your name' variant="standard" /> <br /> <br /><br />
      <TextField className='formfield' name='comment' value={data.comment} onChange={handleInput}    InputProps={{ style: { fontSize: 17 } }}
        InputLabelProps={{ style: { fontSize: 20 } }} id="outlined-basic" size="small"  label="Comment" placeholder='Type your comment' variant="standard" /> <br /> <br /><br />
        <TextField className='formfield' name='number' value={data.number} onChange={handleInput}    InputProps={{ style: { fontSize: 17 } }}
        InputLabelProps={{ style: { fontSize: 20 } }} id="outlined-basic" size="small"  label="Mobile Number" placeholder='Enter your number' variant="standard" /> <br /> <br /><br />
        <TextField className='formfield' name='email' value={data.email} onChange={handleInput}    InputProps={{ style: { fontSize: 17 } }}
        InputLabelProps={{ style: { fontSize: 20 } }} id="outlined-basic" size="small"  label="Email" placeholder='Enter your email' variant="standard" /> <br />
      <Box sx={{ '& button': { m: 1,alignItems:'center',ml:0,mt:4 } }}>
      <Button className='button' type='submit' onClick={postData} size='large' variant="contained">Submit</Button>
      </Box>
      </form>
    </div>
    </div>
  )
}

export default Page5;