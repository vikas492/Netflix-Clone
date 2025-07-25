
import React from 'react';
import './TVShows.css';
import Navbar from '../../components/Navbar/Navbar';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const TVShows = () => {
  return (
    <div className="TVShows">
      <Navbar />
      <div className="tv-shows-hero">
        <div className="hero-content">
          <h1>TV Shows</h1>
          <p>Discover the best TV shows from around the world</p>
        </div>
      </div>
      <div className="tv-shows-content">
        <TitleCards title={"Popular TV Shows"} category={"popular"}/>
        <TitleCards title={"Top Rated Series"} category={"top_rated"}/>
        <TitleCards title={"Trending Now"} category={"now_playing"}/>
        <TitleCards title={"New Episodes"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default TVShows
