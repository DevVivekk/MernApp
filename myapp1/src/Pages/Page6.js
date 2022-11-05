import React from 'react'
import {NavLink} from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
function Page6() {
  return (
    <div className='page-6'>
        <footer className='footer'>
            <div className='row-1'>
                <NavLink className='footer-links' to='/'>Contact Us</NavLink>
                <NavLink className='footer-links' to='/'>Location</NavLink>
                <NavLink className='footer-links' to='/'>Our Market Place</NavLink>
            </div>
            <div className='row-1'>
            <a href="https://github.com/vivekk01?tab=repositories"  className='footer-links' target="_blank" rel="noopener noreferrer">Github</a>
            <NavLink className='footer-links' to='/'>Contributors</NavLink>
            <NavLink className='footer-links' to='/'>Supporters</NavLink>
            </div>
            <div className='row-1'>
            <NavLink className='footer-links' to='/blog'>Blogs</NavLink>
            <NavLink className='footer-links' to='/'>Report a issue</NavLink>
            <NavLink className='footer-links' to='/'>Ping Me</NavLink>
            </div>
            <div className='footer-icons'><FacebookIcon /> <span></span>
            <InstagramIcon /> <span></span>
            <WhatsAppIcon />  <span></span>
            <TwitterIcon />   <span></span>
            </div>
        </footer>
    </div>
  )
}

export default Page6