import React from 'react'
import './NavBar.css';
function NavBar() {
  return (
    <div className='nav-bar'>
    <nav>
       <div className='logo'>
          <div>
          <a href='/'><span>Nice</span><i class="fa fa-circle"></i><br/><span>Quote</span></a>
          </div>
       </div>
       <div className='menu-bar'>
        <ul>
            <li className='active'><a href="/">Home</a></li>
            <li><a href="/">Authors</a></li>
            <li><a href="/">Topics</a></li>
            <li><a href="/">Quote of the day</a></li>
        </ul>
        <div className='btnBx'>
        <button className='btn1'><a href="/">SignUp</a></button>
        <button className='btn2'><a href="/">Login</a></button>
        </div>
       </div>
    </nav>
    </div>
  )
}

export default NavBar