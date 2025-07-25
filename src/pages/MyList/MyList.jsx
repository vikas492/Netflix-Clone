
import React from 'react';
import './MyList.css';
import Navbar from '../../components/Navbar/Navbar';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const MyList = () => {
  return (
    <div className="MyList">
      <Navbar />
      <div className="my-list-hero">
        <div className="hero-content">
          <h1>My List</h1>
          <p>Your personal collection of saved movies and shows</p>
        </div>
      </div>
      <div className="my-list-content">
        <TitleCards title={"Continue Watching"} category={"popular"}/>
        <TitleCards title={"Recently Added"} category={"now_playing"}/>
        <TitleCards title={"Recommended for You"} category={"top_rated"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default MyList
