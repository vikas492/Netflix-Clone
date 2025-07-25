import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'; 
import Search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const navref = useRef();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
 useEffect(() => {
  const handleScroll = () => {
    if (navref.current) {
      if (window.scrollY >= 90) {
        navref.current.classList.add('scrolled');   
      } else {
        navref.current.classList.remove('scrolled'); 
      }
    }
  };

  // Add a small delay to ensure the component is mounted
  const timeoutId = setTimeout(() => {
    window.addEventListener('scroll', handleScroll);
  }, 100);
  
  return () => {
    clearTimeout(timeoutId);
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <div ref={navref} className='Navbar'>
      <div className='navbar-left'>
        <Link to="/">
          <img src={logo} alt="Netflix Logo"/>
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv-shows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/new-popular">New & Popular</Link></li>
          <li><Link to="/my-list">My List</Link></li>
          <li><Link to="/browse">Browse by Language</Link></li>
        </ul>
      </div>
      
      <div className='navbar-right'>
        <div className="search-container">
          <img 
            src={Search_icon} 
            alt="" 
            className='Icons'
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input 
              type="text"
              placeholder="Search movies, shows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && onSearch) {
                  onSearch(searchQuery);
                }
              }}
              className="search-input"
              autoFocus
            />
          )}
        </div>
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