import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonShowMoreMovies from "../ButtonShowMoreMovies/ButtonShowMoreMovies.js";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  const {
    searchMessage,
    buttonSubmit,
    savedMovie,
    handleSaveMovie,
    handleDeleteMovie,
    visibleSearchMovies,
    addMoreMovies,
    searchArray, //ФИЛЬМЫ ПОСЛЕ ПОИСКА
    filterArray, //КОРОТКОМЕТРАЖКИ ИЗ ПОИСКА ПРИ ВКЛ ЧЕКБОКСЕ
    checkBox,
    pageSearchForm,
    pageCheckBox,
    pageSearchArray,
    pageSaveMovies,
    pageShortMovies,
    pageSearchInSearchArray,
    searchForm,
    pageInfoMessage,
    setPageInfoMessage,
    pageFilterArray,
    pageSearchByDurationMovies,
    isLoading,
    searchInSearchArray,
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
          ) : searchInSearchArray.length > 0 ? (
            searchInSearchArray //ПОИСК КОРОТКОМЕТРАЖЕК
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
            searchMessage || (
              <h2 className='movies__notFound-into'>Ничего не найдeно</h2>
            )
          )}
        </ul>
        {!checkBox
          ? visibleSearchMovies < searchArray.length &&
            !buttonSubmit && (
              <ButtonShowMoreMovies addMoreMovies={addMoreMovies} />
            )
          : visibleSearchMovies < searchInSearchArray.length &&
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
          {!pageCheckBox ? (
            pageSearchArray.length > 0 ? (
              pageSearchArray //ФИЛЬМЫ ПОИСК
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
              pageSaveMovies //ФИЛЬМЫ
                .map((movie) => (
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    savedMovie={savedMovie}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                  />
                ))
            )
          ) : pageSearchInSearchArray.length > 0 ? (
            pageSearchInSearchArray //КОРОТКОМЕТРАЖКИ
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
            <h2 className='movies__notFound-into'>Ничего не найдeно</h2>
          )}
        </ul>
      </section>
    );
  }
}
export default MoviesCardList;
