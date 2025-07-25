import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css';
import Cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {
  
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGQ3OWZjMzc1Zjg5YTBlOGY4NTlkYjdkZjFlYWNiZSIsIm5iZiI6MTc1MzM3NDQwNy42OTEsInN1YiI6IjY4ODI1ZWM3YjFiOTQyZGZkYzM4ZWM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQATNlXlWIxZT4Sw1A7-0EciRWHSxQaNAzE4tgS6WgU'
  }
};

  const [Apidata, setApidata] = useState([]);

  const cardsRef = useRef();
  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApidata(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])
  return (
    <div className='TitleCards'>
      <h2 >{title?title:"popular on Netflix"}</h2>
      <div className="card-list"  ref={cardsRef}>
        {Apidata.map((card ,index)=>{
          return <Link to={`/Player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
            <p>{card.original_title} </p>
          </Link>
        })}
      </div>

    </div>
  )
}

export default TitleCards