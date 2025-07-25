import React, { useEffect, useRef } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'; 
import Search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase';

const Navbar = () => {
  const navref = useRef();
 useEffect(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 90) {
      navref.current.classList.add('scrolled');   
    } else {
      navref.current.classList.remove('scrolled'); 
    }
  });
}, []);
  return (
    <div ref={navref} className='Navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="Netflix Logo"/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      
      <div className='navbar-right'>
        <img src={Search_icon} alt="" className='Icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="" className='Icons'/>
        <div className="navbar-profile">
          <img src={profile_img} alt='' className='profile'/>
          <img src={caret_icon} alt='' />
          <div className="Dropdown">
            <p onClick={()=>{
              logout()
            }}>Log Out of Netflex</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar