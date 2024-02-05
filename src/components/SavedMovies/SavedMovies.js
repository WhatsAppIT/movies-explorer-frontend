import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
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
    setIsLoading,
    handleGetMoviesFromApi,
    setIntoLocalStorage,
    isLoading,
  } = props;

  const pageCheckBoxCondition = JSON.parse(
    localStorage.getItem("CheckBox Save-Movies")
  );

  const [pageSaveMovies, setPageSaveMovies] = React.useState(savedMovie); //ФИЛЬМЫ
  const [pageShortMovies, setPageShortMovies] = React.useState([]); //КОРОТКОМЕТРАЖКИ
  const [pageSearchForm, setPageSearchForm] = React.useState(""); //ТЕКСТ ЗАПРОСА
  const [pageCheckBox, setPageCheckBox] = React.useState(
    pageCheckBoxCondition || false
  );
  const [pageSearchArray, setPageSearchArray] = React.useState([]); //ПОИСК ФИЛЬМЫ
  const [pageFilterArray, setPageFilterArray] = React.useState([]); //ПОИСК КОРОТКОМЕТРАЖКИ
  const [submit, setSubmit] = React.useState(false); //ПОИСК КОРОТКОМЕТРАЖКИ
  const [pageInfoMessage, setPageInfoMessage] = React.useState("");

  const pageSearchAllMovies = savedMovie.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(pageSearchForm.toLowerCase());
  }); //ПОИСК
  const pageSearchByDurationMovies = savedMovie.filter((movie) => {
    return movie.duration < 40;
  }); //КАРОТКОМЕТРАЖКИ
  const pageSearchInSearchArray = pageShortMovies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(pageSearchForm.toLowerCase());
  }); //КАРОТКОМЕТРАЖКИ ИЗ ПОИСКА

  React.useEffect(() => {
    setIntoLocalStorage("CheckBox Save-Movies", pageCheckBox);
  }, [pageCheckBox]);

  //ФУНКЦИЯ ПОИСК КОРОТКОМЕТРАЖЕК
  React.useEffect(() => {
    pageFilterMoviesInSearch();
  }, []);
  React.useEffect(() => {
    setPageFilterArray(pageSearchInSearchArray);
  }, [pageShortMovies]);

  //ФУНКЦИЯ КОРОТКОМЕТРАЖКИ
  React.useEffect(() => {
    pageShowShortMovies();
  }, [savedMovie]);

  //ФУНКЦИЯ ФИЛЬМЫ
  React.useEffect(() => {
    showLikedMovies();
  }, [savedMovie]);

  React.useEffect(() => {
    renderMoviesInSubmit();
  }, [submit]);

  function renderMoviesInSubmit() {
    setSubmit(true);
  }

  //ФУНКЦИЯ ФИЛЬМЫ
  function showLikedMovies() {
    setPageSaveMovies(savedMovie);
  }
  //ФУНКЦИЯ КОРОТКОМЕТРАЖКИ
  function pageShowShortMovies() {
    setPageShortMovies(pageSearchByDurationMovies);
  }

  //SAVE-MOVIES ----SUBMIT---- ПОИСК ФИЛЬМОВ
  function handlePageSubmitSearchForm(e) {
    e.preventDefault();
    if (pageSearchForm !== 0) {
      setPageSearchArray(pageSearchAllMovies);
    }
    if (pageSearchForm !== 0) {
      setPageFilterArray(pageSearchInSearchArray);
    }
    if (pageSearchArray.length === 0) {
      setPageSaveMovies([]);
    }
  }

  //ПОИСК КОРОТКОМЕТРАЖЕК
  function pageFilterMoviesInSearch() {
    if (pageSearchForm !== 0) {
      setPageFilterArray(pageSearchInSearchArray);
    }
    if (pageSearchForm === 0) {
      setPageShortMovies(pageSearchAllMovies);
    }
    if (pageFilterArray.length === 0) {
      setPageSaveMovies([]);
    }
  }

  console.log(pageSearchArray);

  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <main className='movies'>
        <SearchForm
          pageCheckBox={pageCheckBox}
          setPageCheckBox={setPageCheckBox}
          pageSearchForm={pageSearchForm}
          setPageSearchForm={setPageSearchForm}
          pageSearchAllMovies={pageSearchAllMovies}
          setPageSearchArray={setPageSearchArray}
          pageSearchArray={pageSearchArray}
          setPageSaveMovies={setPageSaveMovies}
          setIsLoading={setIsLoading}
          handleGetMoviesFromApi={handleGetMoviesFromApi}
          handlePageSubmitSearchForm={handlePageSubmitSearchForm}
          pageFilterMoviesInSearch={pageFilterMoviesInSearch}
          pageFilterArray={pageFilterArray}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            pageSearchForm={pageSearchForm}
            pageCheckBox={pageCheckBox}
            savedMovie={savedMovie}
            handleDeleteMovie={handleDeleteMovie}
            pageSaveMovies={pageSaveMovies}
            pageSearchArray={pageSearchArray}
            pageShortMovies={pageShortMovies}
            pageSearchInSearchArray={pageSearchInSearchArray}
            submit={submit}
            pageInfoMessage={pageInfoMessage}
            setPageInfoMessage={setPageInfoMessage}
            isLoading={isLoading}
            pageSearchAllMovies={pageSearchAllMovies}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
