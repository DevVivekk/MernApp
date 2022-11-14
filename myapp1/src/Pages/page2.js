import React from 'react';
import { useEffect,useState } from 'react';
import IMG from '../Gallery/Astro.png' 

function Page2() {
  const [fetchh,setFetchh] = useState([{ip:'',city:''}])
  const sendToAPi=()=>{
   fetch("https://api.ipgeolocation.io/ipgeo?apiKey=7f9a5078af964c31b4aec46d91c62c12&fields=city&output=application")
   .then((res)=>res.json())
   .then((resultt)=>{
       setFetchh(resultt);
   })
  }
useEffect(()=>{
sendToAPi();
},[])
const sendingApi = async (e)=>{
e.preventDefault();
const {ip,city} = fetchh;
await  fetch('/postapis',{
method:"POST",
headers:{
 "Accept": "application/json",
 "Content-Type" : "application/json"
},
body:JSON.stringify({
 ip,city
})

},);
}
  return (
    <div className='page2' onMouseLeave={sendingApi}>
    <div className='hero-text'>
        <img className='hero-img' src={IMG} alt='img' /> 
        </div>
        <div>
        <h1 className='hero-name hero-items'>Myself, Vivek Bhardwaj!👋</h1>
        <h3 className='hero-items hero-last-name'>I'm a FullStack Web Developer.</h3>
        <p className='info'>I 🧡 programming and I make end to end web apps.</p>
        </div>
         <div className='div' style={{"display":"none"}}>
    <section>
        <form method='POST'>
            <input type='text' value={fetchh.ip} name='ip' /> 
            <input type='text' value={fetchh.city} name='city' /> 
        </form>
    </section>
    </div>
       
    </div>
  )
}

export default Page2

