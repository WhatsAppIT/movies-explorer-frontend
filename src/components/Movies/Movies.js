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
    loggedIn,
    isLoading,
    isOpen,
    movies,
    setMovies,
    getFromLocalStorage,
    setIntoLocalStorage,
    handleSaveMovie,
    handleDeleteMovie,
    savedMovie,
  } = props;

  const [searchForm, setSearchForm] = React.useState("");
  const [searchFormMovies, setSearchFormMovies] = React.useState([]);
  const [filterSearchMovies, setFilterSearchMovies] = React.useState([]);
  const [buttonSubmit, setButtonSubmit] = React.useState(false);
  const [findMovies, setFindMovies] = React.useState([]);

  const [checkBoxButton, setCheckBoxButton] = React.useState(false);
  const [checkSearh, setChecksearh] = React.useState([]);

  const filterMovies = movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchForm);
  });
  const filterMoviesByDuration = movies.filter((movie) => {
    return movie.duration < 40;
  });

  function filteredMovies() {
    setFilterSearchMovies(filterMovies);
    setIntoLocalStorage("Search", filterMovies);
  }

  function filteredMoviesByDuration() {
    setFilterSearchMovies(filterMoviesByDuration);
    setIntoLocalStorage("Search By Duration", filterMovies);
  }

  function saveSearchForm() {
    setSearchFormMovies(getFromLocalStorage("Search"));
  }

  function changeButtonSubmit() {
    setButtonSubmit(true);
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    filteredMovies();
    changeButtonSubmit();
    setSearchFormMovies(filterMovies);
    console.log("handleSubmitSearchForm");
  }

  function search() {
    if (searchFormMovies.length > 0) {
      setIntoLocalStorage("Search", searchFormMovies);
      setFindMovies(filterMovies);
    }
  }
  function searchCheckBox() {
    setFilterSearchMovies(filterMoviesByDuration);
  }

  React.useEffect(
    () => {
      saveSearchForm();
      search();
      searchCheckBox();
    },
    [
      /* searchFormMovies, filterSearchMovies, checkBoxButton */
    ]
  );

  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <main className='movies'>
        <SearchForm
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          filterMovies={filterMovies}
          handleSubmitSearchForm={handleSubmitSearchForm}
          setFilterSearchMovies={setFilterSearchMovies}
          filterSearchMovies={filterSearchMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            searchForm={searchForm}
            movies={movies}
            filterMovies={filterMovies}
            filterSearchMovies={filterSearchMovies}
            isLoading={isLoading}
            buttonSubmit={buttonSubmit}
            setButtonSubmit={setButtonSubmit}
            changeButtonSubmit={changeButtonSubmit}
            savedMovie={savedMovie}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
