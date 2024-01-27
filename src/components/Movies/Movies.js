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
  } = props;

  const [searchForm, setSearchForm] = React.useState("");
  const [filterSearchMovies, setFilterSearchMovies] = React.useState([]);
  const [buttonSubmit, setButtonSubmit] = React.useState(false);

  const filterMovies = movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchForm.toLowerCase());
  });

  const filterMoviesByDuration = movies.filter((movie) => {
    return movie.duration < 40;
  });

  function filteredMovies() {
    setFilterSearchMovies(filterMovies);
  }

  function changeButtonSubmit() {
    setButtonSubmit(true);
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    filteredMovies();
    changeButtonSubmit();

    console.log("handleSubmitSearchForm");
  }

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
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
