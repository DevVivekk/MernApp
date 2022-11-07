import React from 'react'
import {BrowserRouter as Router,Routes,Route, Outlet} from 'react-router-dom'
import Navbarr from './Pages/navbar'
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
import './App.css'
import Page3 from './Pages/page3'
import Page4 from './Pages/Page4'
import Page5 from './Pages/Page5'
import Blog from './Pages/blog'
import Page6 from './Pages/Page6'
import Updatee from './Pages/update'
import Gallery from './acc/gallery'


function App() {
  return (
    <>    
    <Router>
    <Navbarr />
    <Page1 /> 
    <Routes>
      <Route path='/' element={[<Page2 />,<Page3 />,<Page4 />,<Page5 />,<Updatee />]} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/about' element={<Page3 />} />
    </Routes>
    <Page6 />
    </Router>
    <Outlet />
    </>
  )
}

export default App