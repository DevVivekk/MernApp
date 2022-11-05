import React from 'react'
 import IMAGE1 from '../Gallery/brain-image.jpg'
 import IMAGE2 from '../Gallery/codeee.png'
 import IMAGE3 from '../Gallery/imp.png'
function Page3() {
  return (
    <div className='page-3'>
      <h4 className='aboutus'>About Us</h4>
      <div className='boxes'>
        <div className='box'><img src={IMAGE1} className='img-about' alt='img'/><h5 className='info-about-img'>Analyze</h5> </div>
        <div className='box'><img src={IMAGE2} className='img-about' alt='img'/><h5 className='info-about-img'>Code</h5></div>
        <div className='box'><img src={IMAGE3} className='img-about' alt='img'/><h5 className='info-about-img'>Implement</h5></div>
      </div>
      <hr></hr>
      <p className='about-detail'>Relax! This is just the three simple steps which is required to build any big or small applications.
      We believe in building stuffs from scratch rather than deploying used and outdated copy-pasted elements.We are a team of highly skilled web devs. Providing Best and fast responsive websites to our clients. Quality & Trust Matters!!</p>
    </div>
  )
}

export default Page3