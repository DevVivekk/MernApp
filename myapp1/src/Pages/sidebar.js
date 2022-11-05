import {NavLink, Outlet} from 'react-router-dom'
import FeedbackSharpIcon from '@mui/icons-material/FeedbackSharp';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import CameraSharpIcon from '@mui/icons-material/CameraSharp';
import ConnectWithoutContactSharpIcon from '@mui/icons-material/ConnectWithoutContactSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';
//import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import React from 'react'

function Sidebar() {
  return (
        <div className='toggle shadow-xl'>
    <NavLink to='/undefined4' className = 'links'>Gallery<span className='icons'><CameraSharpIcon /></span></NavLink>
    <NavLink to='/myprojects' className = 'links'>My Projects<span className='icons'><AutoAwesomeSharpIcon /></span></NavLink>
    <NavLink to='/undefined' className = 'links'>Feedback<span className='icons'><FeedbackSharpIcon /></span></NavLink>
    <NavLink to='/undefined1' className = 'links'>Team<span className='icons'><GroupsSharpIcon /></span></NavLink>
    <NavLink to='/undefined2' className = 'links'>Connect<span className='icons'><ConnectWithoutContactSharpIcon /></span></NavLink>
    <NavLink to='/blog' className = 'links'>Blogs<span className='icons'><CreateSharpIcon /></span></NavLink>
    {/* <NavLink to='/home' className = 'links'>Products<span className='icons'><MonetizationOnSharpIcon /></span></NavLink> */}
    <NavLink to='/undefined3' className = 'links'>Support<span className='icons'><InsertEmoticonSharpIcon /></span></NavLink>
    <Outlet />
    </div>
  )
}

export default Sidebar