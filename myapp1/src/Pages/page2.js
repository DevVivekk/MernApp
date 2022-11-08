import React from 'react'
import IMG from '../Gallery/Astro.png' 

function Page2() {
  return (
    <div className='page2'>
    <div className='hero-text'>
        <img className='hero-img' src={IMG} alt='img' /> 
        </div>
        <div>
        <h1 className='hero-name hero-items'>Myself, Vivek Bhardwaj!👋</h1>
        <h3 className='hero-items hero-last-name'>I'm a FullStack Web Developer.</h3>
        <p className='info'>I 🧡 programming and I make end to end web apps.</p>
        </div>
       
    </div>
  )
}

export default Page2

