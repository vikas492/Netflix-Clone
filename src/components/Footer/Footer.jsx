import React from 'react'
import './Footer.css';
import youtube_icon from "../../assets/youtube_icon.png"
import twiter_icon from "../../assets/twitter_icon.png"
import instagram_icon from "../../assets/facebook_icon.png"
import facebook_icon from "../../assets/instagram_icon.png"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt=''/>
        <img src={instagram_icon} alt=''/>
        <img src={twiter_icon} alt=''/>
        <img src={youtube_icon} alt=''/>
      </div>
      <ul>
        <li>Audio Discription</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media center</li>
        <li>Investor Relation</li>
        <li>jobs</li>
        <li>Terms and use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <p className='copyright-text'> © 2025 Vikas Zende. All rights reserved.</p>
      </ul>
    </div>
  )
}

export default Footer