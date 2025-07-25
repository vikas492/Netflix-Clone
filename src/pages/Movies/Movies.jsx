
import React from 'react';
import './Movies.css';
import Navbar from '../../components/Navbar/Navbar';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Movies = () => {
  return (
    <div className="Movies">
      <Navbar />
      <div className="movies-hero">
        <div className="hero-content">
          <h1>Movies</h1>
          <p>Watch the latest blockbusters and timeless classics</p>
        </div>
      </div>
      <div className="movies-content">
        <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
        <TitleCards title={"Now Playing"} category={"now_playing"}/>
        <TitleCards title={"Top Rated Movies"} category={"top_rated"}/>
        <TitleCards title={"Coming Soon"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Movies
