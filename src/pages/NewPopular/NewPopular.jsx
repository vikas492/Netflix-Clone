
import React from 'react';
import './NewPopular.css';
import Navbar from '../../components/Navbar/Navbar';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const NewPopular = () => {
  return (
    <div className="NewPopular">
      <Navbar />
      <div className="new-popular-hero">
        <div className="hero-content">
          <h1>New & Popular</h1>
          <p>Stay up to date with the latest releases and trending content</p>
        </div>
      </div>
      <div className="new-popular-content">
        <TitleCards title={"New Releases"} category={"upcoming"}/>
        <TitleCards title={"Trending Now"} category={"popular"}/>
        <TitleCards title={"Worth the Wait"} category={"top_rated"}/>
        <TitleCards title={"Coming This Week"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default NewPopular
