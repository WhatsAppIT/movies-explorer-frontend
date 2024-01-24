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
//import { MoviesApi } from "../../utils/MoviesApi.js";
import { auth } from "../../utils/auth.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
console.log(auth.registration);
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
  const navigate = useNavigate();

  const beatfilmUrl = "https://api.nomoreparties.co/beatfilm-movies";

  React.useEffect(() => {
    fetch(beatfilmUrl)
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => setError(err.message));
  }, []);

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
        setIsRegistrate(false);
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies", { replace: true });
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
      .then((res) => {
        setIsRegistrate(false);
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrate(false);
        setLoggedIn(false);
        setError(err);
      });
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
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
                logOut={handleLogOut}
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
