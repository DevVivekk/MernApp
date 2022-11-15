import React,{useState} from 'react'
import Sidebar from './sidebar';
function Page1() {


  const[data,setData] = useState(false);
  return (
    <>
    <button  className = 'toggle-button shadow'  onClick={()=>setData(!data)}>☰</button>
    {
      data?
      <Sidebar />
    :null
    }
    </>
  )
}

export default Page1