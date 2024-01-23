import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
//import CurrentUserContext from '../contexts/CurrentUserContext.js';

import Main from "../Main/Main.js";
import Navigation from "../Navigation/Navigation.js";
import Login from "../AuthComponents/Login/Login.js";
import Register from "../AuthComponents/Register/Register.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../AuthComponents/Profile/Profile.js";
import PopupHeaderButton from "../PopupHeaderButton/PopupHeaderButton.js";
import NotFound from "../NotFound/NotFound.js";
import "./App.css";
import { MainApi } from "../../utils/MainApi.js";
import { MoviesApi } from "../../utils/MoviesApi.js";
import { auth } from "../../utils/auth.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const [IsRegistrate, setIsRegistrate] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  const [headerPopupOpen, setHeaderPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovie, setSavedMovie] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState("");
  //console.log(MoviesApi.getMoviesFromBeatfilmApi());

  React.useEffect(() => {
    fetch("https://api.nomoreparties.co/beatfilm-movies")
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => setError(error.message));
  }, []);

  function handleHeaderPopupOpen() {
    setHeaderPopupOpen(true);
  }
  function closeAllPopups() {
    setHeaderPopupOpen(false);
  }
  const navigate = useNavigate();

  function handleLogin(email, password) {
    auth
      .authorization(email, password)
      .then((res) => {
        setIsRegistrate(false);
        setUserEmail(email);
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/", { replace: true });
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
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrate(false);
      });
  }

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const token = localStorage.getItem("jwt");
      auth
        .getInformation(token)
        .then((res) => {
          if (res && res.data) {
            setLoggedIn(true);
            setUserEmail(res.data.email);
            navigate("/", { replace: true });
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

  function handleUpdateUser(data) {
    MainApi.editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} />}
          />
          <Route
            path='/'
            element={
              <Main
                loggedIn={loggedIn}
                isOpen={handleHeaderPopupOpen}
                onClose={closeAllPopups}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <Movies
                savedMovie={savedMovie}
                loggedIn={loggedIn}
                isOpen={handleHeaderPopupOpen}
                movies={movies}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <SavedMovies
                savedMovie={savedMovie}
                loggedIn={loggedIn}
                isOpen={handleHeaderPopupOpen}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <Profile
                loggedIn={loggedIn}
                isOpen={handleHeaderPopupOpen}
                onUpdateUser={handleUpdateUser}
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <PopupHeaderButton
          loggedIn={loggedIn}
          isOpen={headerPopupOpen}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
