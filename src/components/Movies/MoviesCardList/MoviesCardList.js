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
    buttonElseActive,
    savedMovie,
    handleSaveMovie,
    handleDeleteMovie,
    visibleSearchMovies,
    addMoreMovies,
    searchArray, //ФИЛЬМЫ ПОСЛЕ ПОИСКА
    searchFilms,
    filterArray, //КОРОТКОМЕТРАЖКИ ИЗ ПОИСКА ПРИ ВКЛ ЧЕКБОКСЕ
    checkBox,
    searchByDurationMovies,
    shortMovies, // ВСЕ КОРОТКОМЕТРАЖКИ ИЗ АПИ
    searchForm, // СТРОКА ИНПУТА
  } = props;

  const location = useLocation();
  console.log(savedMovie);
  return (
    <section className='cards'>
      <ul className='cards__list'>
        {location.pathname === "/movies" && !checkBox ? (
          searchArray.length > 0 ? (
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
            <h2 className='movies__notFound'>Введите данные для поиска</h2>
          )
        ) : (
          //ПУСТОЙ ИНПУТ - ПОКАЗЫВАЮТСЯ ВСЕ КОРОТКОМЕТРАЖКИ
          (checkBox &&
            searchForm === "" &&
            shortMovies
              .slice(0, visibleSearchMovies)
              .map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  savedMovie={savedMovie}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              ))) || //ПОИСК КОРОТКОМЕТРАЖЕК ИЗ ПОИСКА
          (checkBox &&
            searchForm !== "" &&
            filterArray
              .slice(0, visibleSearchMovies)
              .map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  savedMovie={savedMovie}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              )))
        )}

        {location.pathname === "/saved-movies" &&
          savedMovie
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
      {visibleSearchMovies < (searchArray || shortMovies) && !buttonSubmit && (
        <ButtonShowMoreMovies addMoreMovies={addMoreMovies} />
      )}
    </section>
  );
}
export default MoviesCardList;

{
  /* <h2 className='movies__notFound'>Фильмы не найдены</h2> */
}
