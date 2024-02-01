import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
//import Preloader from './Preloader/Preloader';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
//import MoviesCard from './MoviesCard/MoviesCard';
import "./SavedMovies.css";

function SavedMovies(props) {
  const {
    loggedIn,
    isOpen,
    savedMovie,
    handleGetSavedMovies,
    handleDeleteMovie,
  } = props;

  const pageCheckBoxCondition = JSON.parse(
    localStorage.getItem("save-movies CheckBox")
  );

  const [pageSaveMovies, setPageSaveMovies] = React.useState(savedMovie); //ФИЛЬМЫ
  const [findMovies, setfindMovies] = React.useState([]); //РЕЗУЛЬТАТЫ ПОИСКА
  const [pageCheckBox, setPageCheckBox] = React.useState(
    pageCheckBoxCondition || false
  );
  const [pageShortSearchArray, setPageShortSearchArray] = React.useState([]); //КАРОТКОМЕТРАЖКИ
  const [pageSearchForm, setPageSearchForm] = React.useState("");
  const [pageSearchArray, setPageSearchArray] = React.useState([]); //КАРОТКОМЕТРАЖКИ ИЗ ПОИСКА
  const [savedMovieActive, setSavedMovieActive] = React.useState(false);

  //pageSaveMovies

  const pageSearchAllMovies = savedMovie.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(pageSearchForm.toLowerCase());
  }); //ПОИСК

  const pageSearchByDurationMovies = savedMovie.filter((movie) => {
    return movie.duration < 40;
  }); //КАРОТКОМЕТРАЖКИ

  const pageSearchAfterSearch = pageShortSearchArray.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(pageSearchForm.toLowerCase());
  }); //КАРОТКОМЕТРАЖКИ ИЗ ПОИСКА

  //ПОИСК
  function pageSearch() {
    setPageSaveMovies(pageSearchAllMovies);
  }

  //КАРОТКОМЕТРАЖКИ
  function pageShortSearch() {
    if (pageCheckBox) {
      return setPageShortSearchArray(pageSearchByDurationMovies);
    }
  }

  //КАРОТКОМЕТРАЖКИ ИЗ ПОИСКА !!!!!!!!!!
  function pageSearchAfterSearc() {
    if (pageCheckBox) {
      return setPageSearchArray(pageSearchAfterSearch);
    }
  }

  React.useEffect(() => {
    localStorage.setItem("save-movies CheckBox", JSON.stringify(pageCheckBox));
  }, [pageCheckBox]);

  //ПОИСК ПО ФИЛЬМАМ
  React.useEffect(() => {
    pageSearch();
  }, [pageSearchArray]);

  //КАРОТКОМЕТРАЖКИ +
  React.useEffect(() => {
    pageShortSearch();
  }, [savedMovie]);

  //КАРОТКОМЕТРАЖКИ ИЗ ПОИСКА
  React.useEffect(() => {
    pageSearchAfterSearc();
  }, [pageShortSearchArray]);

  console.log(pageSearchArray);

  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <main className='movies'>
        <SearchForm
          pageCheckBox={pageCheckBox}
          setPageCheckBox={setPageCheckBox}
          savedMovieActive={savedMovieActive}
          pageSearch={pageSearch}
          pageSearchForm={pageSearchForm}
          setPageSearchForm={setPageSearchForm}
          pageSearchAllMovies={pageSearchAllMovies}
          setPageSearchArray={setPageSearchArray}
          pageShortSearchArray={pageShortSearchArray}
          pageSearchArray={pageSearchArray}
          pageShortSearch={pageShortSearch}
          setPageSaveMovies={setPageSaveMovies}
          setfindMovies={setfindMovies}
          pageSearchAfterSearc={pageSearchAfterSearc}
        />
        <MoviesCardList
          findMovies={findMovies}
          pageSearchForm={pageSearchForm}
          pageCheckBox={pageCheckBox}
          savedMovie={savedMovie}
          handleDeleteMovie={handleDeleteMovie}
          pageShortSearchArray={pageShortSearchArray}
          pageSaveMovies={pageSaveMovies}
          pageSearchArray={pageSearchArray}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
