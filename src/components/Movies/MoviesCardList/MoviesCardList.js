import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonShowMoreMovies from "../ButtonShowMoreMovies/ButtonShowMoreMovies.js";
import "./MoviesCardList.css";
//import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  const {
    searchAllMovies,
    buttonSubmit,
    savedMovie,
    handleSaveMovie,
    handleDeleteMovie,
    visibleSearchMovies,
    addMoreMovies,
    searchArray,
    searchFilms,
  } = props;
  console.log(searchArray);
  const location = useLocation();

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {location.pathname === "/movies" && searchArray.length > 0 ? (
          searchArray
            .slice(0, visibleSearchMovies)
            .map((movie) => (
              <MoviesCard
                key={movie.movieId}
                movie={movie}
                savedMovie={savedMovie}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
              />
            ))
        ) : (
          <h2 className='movies__notFound'>Фильмы не найдены</h2>
        )}

        {/*         {location.pathname === "/saved-movies" && savedMovie
          ? []
          : buttonSubmit &&
            searchAllMovies
              .slice(0, visibleSearchMovies)
              .map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  savedMovie={savedMovie}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              ))} */}
      </ul>
      {searchAllMovies &&
        visibleSearchMovies < searchArray.length &&
        !buttonSubmit && <ButtonShowMoreMovies addMoreMovies={addMoreMovies} />}
    </section>
  );
}

export default MoviesCardList;
