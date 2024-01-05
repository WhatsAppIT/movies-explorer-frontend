import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
//import CurrentUserContext from '../contexts/CurrentUserContext.js';
import Main from '../Main/Main.js';
import Navigation from '../Navigation/Navigation.js';

import Login from '../AuthComponents/Login/Login.js';
import Register from '../AuthComponents/Register/Register.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../AuthComponents/Profile/Profile.js';
import NotFound from '../NotFound/NotFound.js';
import './App.css';
import { api } from '../../utils/api.js';
import { auth } from '../../utils/auth.js';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [IsRegistrate, setIsRegistrate] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});

  const navigate = useNavigate();

  function handleLogin(username, password) {
    auth
      .authorization(username, password)
      .then((res) => {
        setIsRegistrate(false);
        setUserEmail(username);
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrate(false);
        setLoggedIn(false);
      });
  }

  function handleRegister(email, password) {
    auth
      .registration(email, password)
      .then(() => {
        setIsRegistrate(true);
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrate(false);
      });
  }

  function checkToken() {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      auth
        .getInformation(token)
        .then((res) => {
          if (res && res.data) {
            setLoggedIn(true);
            setUserEmail(res.data.email);
            navigate('/', { replace: true });
          }
        })
        .catch(console.error);
    } else {
      setLoggedIn(false);
    }
  }

  React.useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route path='/signin' element={<Login onLogin={handleLogin} />} />
        <Route
          path='/signup'
          element={<Register onRegister={handleRegister} />}
        />
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
