

import React, { useState } from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="Home">
      <Navbar onSearch={handleSearch} />
      <div className="hero">
        <img src={hero_banner} alt="Hero page" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="hero title" className='caption-image' />
          <p>Discovering his ties to a secret ancient order, a young man living in Istanbul embarks on a quest to save the city from immortal enemies</p>
          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt="play" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="info" />More Info</button>
          </div>
        </div>
      </div>
      <div className="more-cards">
          {searchQuery ? (
            <TitleCards title={`Search results for "${searchQuery}"`} searchQuery={searchQuery}/>
          ) : (
            <>
              <TitleCards title={"Blockbuster Movies"} category={"now_playing"}/>
              <TitleCards title={"Only on Netflix"} category={"popular"}/>
              <TitleCards title={"Upcoming"} category={"top_rated"}/>
              <TitleCards title={"Top picks for you"} category={"upcoming"}/>
            </>
          )}
        </div>
        <Footer/>
    </div>
  )
}

export default Home
