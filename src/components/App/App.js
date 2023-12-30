import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import CurrentUserContext from '../contexts/CurrentUserContext.js';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import Footer from '../Footer/Footer.jsx';
import Login from '../AuthComponents/Login/Login.jsx';
import Register from '../AuthComponents/Register/Register.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../AuthComponents/Profile/Profile.jsx';
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
