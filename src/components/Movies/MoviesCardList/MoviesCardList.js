import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonShowMoreMovies from "../ButtonShowMoreMovies/ButtonShowMoreMovies.js";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  const {
    loggedIn,
    isOpen,
    movies,
    filterMovies,
    clearMovies,
    searchForm,
    isLoading,
    buttonSubmit,
    setButtonSubmit,
    changeButtonSubmit,
    savedMovie,
    handleSaveMovie,
    handleDeleteMovie,
  } = props;

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [visibleSearchMovies, setVisibleSearchMovies] = React.useState(0);
  const [addMovies, setAddMovies] = React.useState(0);

  const [elseButtonClick, setElseButtonClick] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    visibleMovies();
    addSearchMovies();

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  function visibleMovies() {
    if (windowWidth < 635) {
      setVisibleSearchMovies(5);
    }
    if (windowWidth >= 635) {
      setVisibleSearchMovies(8);
    }
    if (windowWidth >= 1077) {
      setVisibleSearchMovies(12);
    }
  }

  function addSearchMovies() {
    if (windowWidth < 635) {
      setAddMovies(2);
    }
    if (windowWidth >= 635) {
      setAddMovies(2);
    }
    if (windowWidth >= 1077) {
      setAddMovies(3);
    }
  }

  function addMoreMovies() {
    setVisibleSearchMovies(visibleSearchMovies + addMovies);
    console.log("addMoreMovies");
  }

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {location.pathname === "/movies" && searchForm === ""
          ? []
          : !buttonSubmit &&
            filterMovies
              .slice(0, visibleSearchMovies)
              .map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  savedMovie={savedMovie}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              ))}

        {location.pathname === "/saved-movies" &&
        savedMovie &&
        searchForm === ""
          ? []
          : buttonSubmit &&
            filterMovies
              .slice(0, visibleSearchMovies)
              .map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  savedMovie={savedMovie}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              ))}
      </ul>
      {filterMovies &&
        visibleSearchMovies < filterMovies.length &&
        buttonSubmit && <ButtonShowMoreMovies addMoreMovies={addMoreMovies} />}
    </section>
  );
}

export default MoviesCardList;
