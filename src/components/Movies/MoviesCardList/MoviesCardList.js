import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonShowMoreMovies from "../ButtonShowMoreMovies/ButtonShowMoreMovies.js";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  const {
    searchMessage,
    error,
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
    pageSearchForm,
    pageShortSearchArray,
    pageCheckBox,
    pageSearchArray,
    pageSaveMovies,
    setIsLoading,
    isLoading,
    pageFilterArray,
    pageShortMovies,
    pageSearchAfterSearch,
    submit,
    searchComplete,
  } = props;

  const location = useLocation();

  if (location.pathname === "/movies") {
    return (
      <section className='cards'>
        <ul className='cards__list'>
          {!checkBox ? (
            searchArray.length > 0 ? (
              searchArray //ПОИСК ФИЛЬМОВ
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
              <h2 className='movies__notFound'>{searchMessage}</h2>
            )
          ) : filterArray.length > 0 ? (
            filterArray //ПОИСК КОРОТКОМЕТРАЖЕК
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
            <h2 className='movies__notFound'>{searchMessage}</h2>
          )}
        </ul>
        {visibleSearchMovies < (searchArray.length || filterArray.length) &&
          !buttonSubmit && (
            <ButtonShowMoreMovies addMoreMovies={addMoreMovies} />
          )}
      </section>
    );
  }

  if (location.pathname === "/saved-movies") {
    return (
      <section className='cards'>
        <ul className='cards__list'>
          {!pageCheckBox
            ? pageSearchArray.length > 0 //ПОИСК ФИЛЬМЫ
              ? pageSearchArray.map((movie) => (
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    savedMovie={savedMovie}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))
              : pageSaveMovies.map((movie) => (
                  //ВСЕ СОХРАНЕННЫЕ ФИЛЬМЫ ++
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    savedMovie={savedMovie}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))
            : //КОРОТКОМЕТРАЖКИ ++
              (pageSearchForm === "" &&
                pageShortMovies.map((movie) => (
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    savedMovie={savedMovie}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))) || //ПОИСК КОРОТКОМЕТРАЖКИ ----
              (pageSearchForm !== "" &&
                pageSearchAfterSearch.map((movie) => (
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    savedMovie={savedMovie}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                )))}
        </ul>
      </section>
    );
  }
}
export default MoviesCardList;
