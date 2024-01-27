import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
//import Preloader from './Preloader/Preloader';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
//import MoviesCard from './MoviesCard/MoviesCard';
import "./Movies.css";

function Movies(props) {
  const {
    loggedIn,
    isLoading,
    isOpen,
    savedMovie,
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

  function filteredMovies() {
    setFilterSearchMovies(filterMovies);
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    filteredMovies();
    console.log("!!!");
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
        <MoviesCardList
          searchForm={searchForm}
          movies={movies}
          filterMovies={filterMovies}
          filterSearchMovies={filterSearchMovies}
          isLoading={isLoading}
          buttonSubmit={buttonSubmit}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
