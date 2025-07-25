import React from 'react'
import Home from './pages/Home/Home';
import { Routes,Route, useNavigation, useNavigate } from 'react-router-dom';
import Login from "./pages/Login/Login"
import Player from './pages/Player/Player';
import TVShows from './pages/TVShows/TVShows';
import Movies from './pages/Movies/Movies';
import NewPopular from './pages/NewPopular/NewPopular';
import MyList from './pages/MyList/MyList';
import Browse from './pages/Browse/Browse';
import { onAuthStateChanged } from 'firebase/auth/cordova';
import { useEffect } from 'react';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('User is signed in:', user);
        navigate('/')
      } else {
        // console.log('No user is signed in');
        navigate('/login')
      }
    });
  },[])
  return (
    <div>
      <ToastContainer theme='dark' />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/player/:id' element={<Player/>}/>
    <Route path='/tv-shows' element={<TVShows/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/new-popular' element={<NewPopular/>}/>
    <Route path='/my-list' element={<MyList/>}/>
    <Route path='/browse' element={<Browse/>}/>
    </Routes>
      
    </div>
  )
}

export default App