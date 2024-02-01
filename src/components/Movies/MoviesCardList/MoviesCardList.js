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
    pageSearchForm,
    pageShortSearchArray,
    pageCheckBox,
    findMovies,
    pageSaveMovies,
    pageSearchArray,
    setIsLoading,
    isLoading,
  } = props;

  const location = useLocation();

  if (location.pathname === "/movies") {
    return (
      <section className='cards'>
        <ul className='cards__list'>
          {!checkBox ? (
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
              <h2 className='movies__notFound'>Ничего не найдено</h2>
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
        </ul>
        {visibleSearchMovies < (searchArray.length || shortMovies.length) &&
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
          {savedMovie && !pageCheckBox
            ? pageSearchForm === ""
              ? savedMovie.map((movie) => (
                  //ВСЕ СОХРАНЕННЫЕ ФИЛЬМЫ <h2>Ничего не найдено</h2>
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    savedMovie={savedMovie}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))
              : pageSaveMovies.map((movie) => (
                  //ПОИСК ПО СОХРАНЕННЫМ ФИЛЬМАМ
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    savedMovie={savedMovie}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))
            : (pageSearchForm === "" &&
                pageShortSearchArray.map((movie) => (
                  //ВСЕ КОРОТКОМЕТРАЖКИ
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    savedMovie={savedMovie}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))) ||
              (pageSearchForm !== "" &&
                pageSearchArray.map((movie) => (
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
