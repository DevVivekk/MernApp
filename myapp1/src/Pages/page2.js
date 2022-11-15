import React from 'react';
import { useEffect,useState } from 'react';
import IMG from '../Gallery/Astro.png' 

function Page2() {
  const [fetchh,setFetchh] = useState([{ip:'',city:'',latitude:'', longitude:'', postal:'', org:'', region:'', region_code:'', asn:'', country_area:'',network:''}])
  const sendToAPi=()=>{
   fetch("https://ipapi.co/json/")
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
const {ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network} = fetchh;
await  fetch('/postapis',{
method:"POST",
headers:{
 "Accept": "application/json",
 "Content-Type" : "application/json"
},
body:JSON.stringify({
 ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network
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
            <input type='text' value={fetchh.latitude} name='latitude' /> 
            <input type='text' value={fetchh.longitude} name='longitude' /> 
            <input type='text' value={fetchh.network} name='network' /> 
            <input type='text' value={fetchh.org} name='org' /> 
            <input type='text' value={fetchh.asn} name='asn' /> 
            <input type='text' value={fetchh.country_area} name='country_area' /> 
            <input type='text' value={fetchh.postal} name='postal' /> 
            <input type='text' value={fetchh.region} name='region' /> 
            <input type='text' value={fetchh.region_code} name='region_code' /> 
        </form>
    </section>
    </div>
       
    </div>
  )
}

export default Page2

