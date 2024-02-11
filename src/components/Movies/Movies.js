import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
//import MoviesCard from './MoviesCard/MoviesCard';
import "./Movies.css";

function Movies(props) {
  const {
    movies,
    loggedIn,
    isLoading,
    isOpen,
    setIntoLocalStorage,
    handleSaveMovie,
    handleDeleteMovie,
    savedMovie,
    setIsLoading,
  } = props;

  //ОТОБРАЖЕНИЕ ФИЛЬМОВ В ЗАВИСИМОСТИ ОТ РАЗРЕШЕНИЯ И КНОПКА "ЕЩЕ"
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [visibleSearchMovies, setVisibleSearchMovies] = React.useState(0);
  const [addMovies, setAddMovies] = React.useState(0);

  //АКТИВНАЯ ИЛИ НЕАКТИВНАЯ КНОПКА ПОИСКА &&
  const [buttonSubmit, setButtonSubmit] = React.useState(false);
  const [buttonElseActive, setbuttonElseActive] = React.useState(false);

  const textInInput = JSON.parse(localStorage.getItem("Input"));
  const checkBoxCondition = JSON.parse(localStorage.getItem("Condition"));
  const searchFilms = JSON.parse(localStorage.getItem("Search"));
  const searchByCheckBox = JSON.parse(localStorage.getItem("Search ChecBox"));
  const infoMessage = JSON.parse(localStorage.getItem("InfoMessage"));
  const searchAllShortMovies = JSON.parse(
    localStorage.getItem("All Shot Movies")
  );

  //"LOCALsTORAGE!!!!!" ПОСЛЕ ПОИСКА ФИЛЬМОВ - ТЕКСТ ЗАПРОСА, СОСТОЯНИЕ ЧЕКБОКСА, НАЙДЕННЫЕ ФИЛЬМЫ
  const [searchForm, setSearchForm] = React.useState(textInInput || ""); //ТЕКСТ ЗАПРОСА
  const [checkBox, setCheckBox] = React.useState(checkBoxCondition || false); //СОСТОЯНИЕ ЧЕКБОКСА
  const [searchArray, setSearchArray] = React.useState(searchFilms || []); //НАЙДЕННЫЕ ФИЛЬМЫ
  const [filterArray, setFilterArray] = React.useState(searchByCheckBox || []); //НАЙДЕНЫЕ КОРОТКОМЕТРАЖКИ
  const [shortMovies, setShortMovies] = React.useState(
    searchAllShortMovies || []
  ); //ПОИСК КОРОТКОМЕТРАЖЕК ИЗ ГЛАВНОГО АПИ
  const [searchMessage, setSearchMessage] = React.useState(infoMessage || "");

  //ПОИСК ФИЛЬМОВ
  const searchAllMovies = movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchForm.toLowerCase());
  }); //ПОИСК
  const searchByDurationMovies = movies.filter((movie) => {
    return movie.duration < 40; //КОРОТКОМЕТРАЖКИ
  });
  const searchInSearchArray = shortMovies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchForm.toLowerCase());
  }); //КОРОТКОМЕТРАЖКИ ИЗ ПОИСКА

  //WINDOWWIDTH
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
  //КНОПКА "ЕЩЕ"
  function addMoreMovies() {
    setVisibleSearchMovies(visibleSearchMovies + addMovies);
  }

  //СОХРАНЕНИЕ ДАННЫХ В LOCALSTORAGE
  React.useEffect(() => {
    setIntoLocalStorage("Input", searchForm);
    setIntoLocalStorage("Condition", checkBox); //+
    setIntoLocalStorage("Search", searchArray);
    setIntoLocalStorage("Search ChecBox", filterArray);
    setIntoLocalStorage("All Shot Movies", shortMovies);
    setIntoLocalStorage("InfoMessage", searchMessage);
  }, [
    checkBox,
    searchForm,
    searchArray,
    filterArray,
    shortMovies,
    searchMessage,
  ]);

  React.useEffect(() => {
    setIntoLocalStorage("Search ChecBox", searchInSearchArray);
  }, [searchInSearchArray]);

  //CHECKBOXXXXXXX

  function findAllShortMovies() {
    setShortMovies(searchByDurationMovies);
  }
  //console.log(searchByDurationMovies);
  React.useEffect(() => {
    findAllShortMovies();
  }, [movies]);

  React.useEffect(() => {
    filterMoviesInSearch();
  }, []);

  React.useEffect(() => {
    setFilterArray(searchInSearchArray);
  }, []);

  React.useEffect(() => {
    clearInput();
  }, [searchForm]);

  function clearInput() {
    if (searchForm === "") {
      setSearchMessage("");
    }
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    visibleMovies();
    if (filterArray.length === 0 || searchArray.length === 0) {
      setSearchMessage("Ничего не найдено");
    } else {
      setSearchMessage("");
    }
    if (searchForm !== 0) {
      setSearchArray(searchAllMovies);
      setFilterArray(searchInSearchArray);
    }
  }

  function filterMoviesInSearch() {
    visibleMovies();
    if (filterArray.length === 0 || searchArray.length === 0) {
      setSearchMessage("Ничего не найдено");
    }  else {
      setSearchMessage("");
    }
    if (searchForm !== 0) { 
      setFilterArray(searchInSearchArray); 
      setSearchArray(searchAllMovies);
    } else { 
      setShortMovies(searchAllShortMovies); 
    } 
  }


  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <main className='movies'>
        <SearchForm
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          checkBox={checkBox}
          setCheckBox={setCheckBox}
          filterMoviesInSearch={filterMoviesInSearch}
          setSearchArray={setSearchArray}
          searchAllMovies={searchAllMovies}
          handleSubmitSearchForm={handleSubmitSearchForm}
          searchMessage={searchMessage}
          searchArray={searchArray}
          filterArray={filterArray}
          searchInSearchArray={searchInSearchArray}
          buttonSubmit={buttonSubmit}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            searchMessage={searchMessage}
            searchAllMovies={searchAllMovies}
            buttonSubmit={buttonSubmit}
            savedMovie={savedMovie}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            visibleSearchMovies={visibleSearchMovies}
            addMoreMovies={addMoreMovies}
            searchArray={searchArray}
            searchFilms={searchFilms}
            filterArray={filterArray}
            checkBox={checkBox}
            searchByDurationMovies={searchByDurationMovies}
            shortMovies={shortMovies}
            searchForm={searchForm}
            buttonElseActive={buttonElseActive}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            searchInSearchArray={searchInSearchArray}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
