import React from 'react'
import Ayodhya from '../Gallery/ayodhya.png'
import Akshardham from '../Gallery/akshardham.png'
import Rishikesh from '../Gallery/OIPP.PNG'
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
function Blog() {
  return (
         <div className='page-4'>
    <h4 className='testimonials-blogs'>"Welcome To My Blogs" 💖</h4>
     <div className='boxes'>
        <div className='box-1'><img  className='img-data-blog' src={Ayodhya} alt='img' /><h4 className='name-dataa'>Ayodhya Blog<ArrowOutwardSharpIcon /></h4></div>
        <div className='box-1'><img  className='img-data-blog' src={Akshardham} alt='img' /><h4 className='name-dataa'>Akshardham Blog<ArrowOutwardSharpIcon /></h4></div>
        <div className='box-1'><img className='img-data-blog' src={Rishikesh} alt='img' /><h4 className='name-dataa'>Rishikesh Blog<ArrowOutwardSharpIcon /></h4></div>
        </div>
    </div>
  )
}

export default Blog