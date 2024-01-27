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
import { mainApi } from "../../utils/MainApi.js";
//import { MoviesApi } from "../../utils/MoviesApi.js";
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
  const [beatFilmMovies, setBeatFilmMovies] = React.useState([]);
  const [updateSuccessMessage, setUpdateSuccessMessage] = React.useState(false);

  const [searchResultSavedMovies, setSearchResultSavedMovies] = React.useState(
    []
  );
  const navigate = useNavigate();

  const beatfilmUrl = "https://api.nomoreparties.co/beatfilm-movies";

  function handleHeaderPopupOpen() {
    setHeaderPopupOpen(true);
  }
  function closeAllPopups() {
    setHeaderPopupOpen(false);
  }

  function handleLogin(email, password) {
    auth
      .authorization(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        handleGetUser();
        navigate("/movies", { replace: true });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrate(false);
        setLoggedIn(false);
        setError(err);
      });
  }

  function handleRegister(name, email, password) {
    auth
      .registration(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrate(false);
        setLoggedIn(false);
        setError(err);
      });
  }

  function handleLogOut(e) {
    setLoggedIn(false);
    localStorage.clear();
    navigate("/signin");
  }

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const token = localStorage.getItem("jwt");
      auth
        .getInformation(token)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            handleGetMoviesFromApi();
          }
        })
        .catch(console.error);
    } else {
      setLoggedIn(false);
    }
  }

  React.useEffect(() => {
    checkToken();
    handleGetUser();
  }, []);

  function handleUpdateUser(data) {
    mainApi
      .editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        setUpdateSuccessMessage(true);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleGetUser() {
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    handleGetUser();
  }, []);

  React.useEffect(() => {
    handleGetMoviesFromApi();
  }, []);

  function handleGetMoviesFromApi() {
    fetch(beatfilmUrl)
      .then((res) => res.json())
      .then((movies) => {
        localStorage.setItem(
          "movies from BeatFilm API",
          JSON.stringify(movies)
        );
        setMovies(movies);
      })
      .catch((err) => setError(err));
  }

  function setIntoLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path='/signin'
            element={<Login onLogin={handleLogin} error={error} />}
          />
          <Route
            path='/signup'
            element={<Register onRegister={handleRegister} error={error} />}
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
                loggedIn={loggedIn}
                isOpen={handleHeaderPopupOpen}
                movies={movies}
                setMovies={setMovies}
                isLoading={isLoading}
                setIntoLocalStorage={setIntoLocalStorage}
                getFromLocalStorage={getFromLocalStorage}
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
                logOut={handleLogOut}
                error={error}
                updateSuccessMessage={updateSuccessMessage}
                setUpdateSuccessMessage={setUpdateSuccessMessage}
                isLoading={isLoading}
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
