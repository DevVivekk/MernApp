import React from 'react'
import IMGG from '../Gallery/huehue.png'
import IMGGG from '../Gallery/jadugar.png'
import IMGGGG from '../Gallery/colddog.png'
function Page4() {
  return (
    <div className='page-4'>
    <h4 className='testimonials'>"Testimonials 😍"</h4>
     <div className='boxes'>
        <div className='box-1'><img src={IMGG}  className='img-data' alt='img' /><h4 className='name-data'>Aditya</h4><p className='review'>Bhaiya Ji Hue Hue! 😊</p></div>
        <div className='box-1'><img src={IMGGG} className='img-data' alt='img' /><h4 className='name-data'>Rajkumar Cheems</h4><p className='review'>Mai kya comment karu Mai toh raja hu! Hue hue hue.. 😘</p></div>
        <div className='box-1'><img src={IMGGGG} className='img-data' alt='img' /><h4 className='name-data'>Sohan</h4><p className='review'>Bhaut Thand Lag raha hai bhai baad mei comment karta hu..😂</p></div>
        </div>
    </div>
  )
}

export default Page4