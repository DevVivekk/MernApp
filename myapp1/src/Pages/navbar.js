import { NavLink} from 'react-router-dom'
import IMGG from '../Gallery/Vivek.jpg'

function Navbar() {
  return (
    <>
      <div className='nav shadow'>
      <header>
      <nav>
      <ul className='nav-list'>
      
        <button type='button' className='nav-button'>Contributors</button>
        <li className='linkone'><NavLink to="/about" className='nav-links'>About</NavLink></li> 
        <li className='linkone'><NavLink to='' className='nav-links'>Home</NavLink></li>
        <img src={IMGG} className='nav-dp' alt='#dp' />
        </ul>
        </nav>
        </header>

      </div>
    </>
  )
}

export default Navbar