
import React from 'react';
import './Browse.css';
import Navbar from '../../components/Navbar/Navbar';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Browse = () => {
  return (
    <div className="Browse">
      <Navbar />
      <div className="browse-hero">
        <div className="hero-content">
          <h1>Browse by Language</h1>
          <p>Explore content from different cultures and languages</p>
        </div>
      </div>
      <div className="browse-content">
        <TitleCards title={"English Content"} category={"popular"}/>
        <TitleCards title={"International Movies"} category={"top_rated"}/>
        <TitleCards title={"Global TV Shows"} category={"now_playing"}/>
        <TitleCards title={"Dubbed & Subtitled"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Browse;
