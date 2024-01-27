import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonShowMoreMovies from "../ButtonShowMoreMovies/ButtonShowMoreMovies.js";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  const {
    loggedIn,
    isOpen,
    movies,
    filterMovies,
    clearMovies,
    searchForm,
    isLoading,
    buttonSubmit,
    setButtonSubmit,
    changeButtonSubmit,
  } = props;

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [visibleSearchMovies, setVisibleSearchMovies] = React.useState(0);
  const [addMovies, setAddMovies] = React.useState(0);

  const [elseButtonClick, setElseButtonClick] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(false);

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

  function addMoreMovies() {
    setVisibleSearchMovies(visibleSearchMovies + addMovies);
    console.log("addMoreMovies");
  }

  return (
    <section className='cards'>
      <ul className='cards__list'>
        {searchForm === ""
          ? []
          : buttonSubmit &&
            filterMovies
              .slice(0, visibleSearchMovies)
              .map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
      </ul>
      {filterMovies &&
        visibleSearchMovies < filterMovies.length &&
        buttonSubmit && <ButtonShowMoreMovies addMoreMovies={addMoreMovies} />}
    </section>
  );
}

export default MoviesCardList;
