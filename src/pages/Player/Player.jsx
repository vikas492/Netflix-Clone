import React, { useEffect, useState } from 'react';
import './Player.css';
import Back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGQ3OWZjMzc1Zjg5YTBlOGY4NTlkYjdkZjFlYWNiZSIsIm5iZiI6MTc1MzM3NDQwNy42OTEsInN1YiI6IjY4ODI1ZWM3YjFiOTQyZGZkYzM4ZWM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQATNlXlWIxZT4Sw1A7-0EciRWHSxQaNAzE4tgS6WgU'
  }
};

const [apidata, setApidata] = useState({
  name: '',
  key: '',
  published_at: '',
  typeof:''
});
const {id} = useParams();

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => {setApidata(res.results[0])})  

  .catch(err => console.error(err));
  

},[])


const navigate = useNavigate();


return (
    <div className='Player'>
      <img src={Back_arrow_icon} alt='' onClick={()=>{
        navigate(-2)
      }}/>
      <iframe 
      width="90%"
      height="90%"
      src={`https://www.youtube.com/embed/${apidata.key}`}
      title='trailer'
      frameBorder="0"
      allowFullScreen
      ></iframe>
      <div className="Player-Info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Player