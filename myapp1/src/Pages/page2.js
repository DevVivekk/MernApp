import React from 'react'
import IMG from '../Gallery/Astro.png' 

function Page2() {
  return (
    <div className='page2'>
    <div className='hero-text'>
        <h3 className='item-1'>" Lets Do The Impossible! "👋</h3>
        <img className='hero-img' src={IMG} alt='img' /> 
        <h1 className='hero-name hero-items'>My Self, Vivek Bhardwaj!</h1>
        <h3 className='hero-items hero-last-name'>I'm a FullStack Web Developer.</h3>
        <p className='info'>I 🧡 programming and I make end to end web apps.</p>
        </div>
       
    </div>
  )
}

export default Page2

