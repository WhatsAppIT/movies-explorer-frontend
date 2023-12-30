import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import CurrentUserContext from '../contexts/CurrentUserContext.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Footer/Footer.js';
import Login from '../AuthComponents/Login/Login.js';
import Register from '../AuthComponents/Register/Register.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../AuthComponents/Profile/Profile.js';
import './App.css';
//import { api } from '../utils/api.js';
//import { auth } from '../utils/auth.js';

function App() {
  return (
    <div className='page'>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
