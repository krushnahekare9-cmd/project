import React from 'react'
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import './Class.css'
import {Route,Routes,Link} from 'react-router-dom'
const App = () => {
  return (
    <div >
      <div className='aa'>
       <div className='gg'> <span><b>MySite</b></span></div>
       <div className='ww'>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/service'>Service</Link>
      </div>
      </div>
      <div>
      <Routes className='bb'>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
      </Routes>
      </div>
      <div className='pi'>
            <span>@2026 MySite. All rights reserved.</span>
        </div>
    </div>
  )
}

export default App