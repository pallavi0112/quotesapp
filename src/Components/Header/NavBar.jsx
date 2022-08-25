import React from 'react'
import './NavBar.css';
import logo from '../../Images/logo.png'
function NavBar() {
  return (
    <div className='nav-bar'>
      <nav>
        <div className='logo'>
          <img src={logo} alt="logo"/>
        </div>
        {/* <div className='menu-icon'>
        <i class="fa fa-bars"></i>
        </div> */}
        <div className='menu-bar'>
          <ul>
            <li className='active'><a href="/">Home</a></li>
            <li><a href="/">Authors</a></li>
            <li><a href="/">Topics</a></li>
            <li><a href="/">Quote of the day</a></li>
            <li><button className='btn1'><a href="/">SignUp</a></button></li>
            <li><button className='btn2'><a href="/">Login</a></button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar