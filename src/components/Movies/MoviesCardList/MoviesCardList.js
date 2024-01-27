import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  const {
    loggedIn,
    isOpen,
    savedMovie,
    movies,
    filterMovies,
    clearMovies,
    searchForm,
    isLoading,
    buttonSubmit,
  } = props;

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [visibleSearchMovies, setVisibleSearchMovies] = React.useState(0);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth < 635) {
      setVisibleSearchMovies(5);
    }

    if (windowWidth >= 635) {
      setVisibleSearchMovies(8);
    }

    if (windowWidth >= 1077) {
      setVisibleSearchMovies(12);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {searchForm === ""
          ? []
          : filterMovies
              .slice(0, visibleSearchMovies)
              .map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
      </ul>
      <button type='button' className='cards__else'>
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
