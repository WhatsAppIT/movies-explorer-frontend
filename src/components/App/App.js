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
import PopupHeaderButton from '../PopupHeaderButton/PopupHeaderButton.js';
import NotFound from '../NotFound/NotFound.js';
import './App.css';
import { api } from '../../utils/api.js';
import { auth } from '../../utils/auth.js';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [IsRegistrate, setIsRegistrate] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [headerPopupOpen, setHeaderPopupOpen] = React.useState(false);

  const navigate = useNavigate();

  function handleHeaderButtonClick() {
    setHeaderPopupOpen(true);
  }
  function closeAllPopups() {
    setHeaderPopupOpen(false);
  }

  function handleLogin(email, password) {
    auth
      .authorization(email, password)
      .then((res) => {
        setIsRegistrate(false);
        setUserEmail(email);
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

  function handleRegister(username, email, password) {
    auth
      .registration(username, email, password)
      .then(() => {
        setIsRegistrate(true);
        navigate('/', { replace: true });
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
        <Route path='/' element={<Main isOpened={headerPopupOpen} />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <PopupHeaderButton
        isOpen={handleHeaderButtonClick}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
