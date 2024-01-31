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
    setMovies,
    loggedIn,
    isLoading,
    isOpen,
    getFromLocalStorage,
    setIntoLocalStorage,
    handleSaveMovie,
    handleDeleteMovie,
    savedMovie,
  } = props;

  //ОТОБРАЖЕНИЕ ФИЛЬМОВ В ЗАВИСИМОСТИ ОТ РАЗРЕШЕНИЯ И КНОПКА "ЕЩЕ"
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [visibleSearchMovies, setVisibleSearchMovies] = React.useState(0);
  const [addMovies, setAddMovies] = React.useState(0);

  //АКТИВНАЯ ИЛИ НЕАКТИВНАЯ КНОПКА ПОИСКА &&
  const [buttonSubmit, setButtonSubmit] = React.useState(false);
  const [buttonElseActive, setbuttonElseActive] = React.useState(false);

  const textInInput = JSON.parse(localStorage.getItem("Текст Из Поиска"));
  const checkBoxCondition = JSON.parse(
    localStorage.getItem("Положение Чекбокса")
  );
  const searchFilms = JSON.parse(
    localStorage.getItem("Массив Найденых Фильмов")
  );
  const searchByCheckBox = JSON.parse(
    localStorage.getItem("Поиск По Чекбоксу")
  );
  const searchAllShortMovies = JSON.parse(
    localStorage.getItem("Поиск Короткометражек Из АПИ")
  );

  //"LOCALsTORAGE!!!!!" ПОСЛЕ ПОИСКА ФИЛЬМОВ - ТЕКСТ ЗАПРОСА, СОСТОЯНИЕ ЧЕКБОКСА, НАЙДЕННЫЕ ФИЛЬМЫ
  const [searchForm, setSearchForm] = React.useState(textInInput || ""); //ТЕКСТ ЗАПРОСА
  const [checkBox, setCheckBox] = React.useState(checkBoxCondition || false); //СОСТОЯНИЕ ЧЕКБОКСА
  const [searchArray, setSearchArray] = React.useState(searchFilms || []); //НАЙДЕННЫЕ ФИЛЬМЫ
  const [filterArray, setFilterArray] = React.useState(searchByCheckBox || []); //ПОКАЗЫВАЕТ МАССИВ КОРОТКОМЕТРАЖЕК ПРИ НАЖАТИИ НА ЧЕКБОКС
  const [shortMovies, setShortMovies] = React.useState(
    searchAllShortMovies || []
  ); //ПОИСК КОРОТКОМЕТРАЖЕК ИЗ ГЛАВНОГО АПИ

  //СОХРАНЕНИЕ ДАННЫХ В LOCALSTORAGE
  React.useEffect(() => {
    setIntoLocalStorage("Текст Из Поиска", searchForm);
    setIntoLocalStorage("Положение Чекбокса", checkBox); //+
    setIntoLocalStorage("Массив Найденых Фильмов", searchArray);
    setIntoLocalStorage("Поиск По Чекбоксу", filterArray);
    setIntoLocalStorage("Поиск Короткометражек Из АПИ", shortMovies);
  }, [checkBox, searchForm, searchArray, filterArray, shortMovies]);

  //ПОИСК ФИЛЬМОВ
  const searchAllMovies = movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchForm.toLowerCase());
  });
  const searchByDurationMovies = movies.filter((movie) => {
    return movie.duration < 40;
  });
  const searchInSearchArray = searchArray.filter((movie) => {
    return movie.duration < 40;
  });
  console.log(searchArray);

  //CHECKBOXXXXXXX
  function filterMoviesInSearch() {
    if (checkBox) {
      return setFilterArray(searchInSearchArray);
    }
  }
  function findAllShortMovies() {
    setShortMovies(searchByDurationMovies);
  }

  React.useEffect(() => {
    findAllShortMovies();
  }, [movies]);

  React.useEffect(() => {
    filterMoviesInSearch();
  }, [movies]);

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
    console.log("addMoreMovies");
  }

  //КНОПКА  САБМИТ
  function handleSubmitSearchForm(e) {
    e.preventDefault();

    setSearchArray(searchAllMovies);
    console.log("handleSubmitSearchForm");
  }

  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <main className='movies'>
        <SearchForm
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          handleSubmitSearchForm={handleSubmitSearchForm}
          checkBox={checkBox}
          setCheckBox={setCheckBox}
          filterMoviesInSearch={filterMoviesInSearch}
        />
        {isLoading && loggedIn ? (
          <Preloader />
        ) : (
          <MoviesCardList
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
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
