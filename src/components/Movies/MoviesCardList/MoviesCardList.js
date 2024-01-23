import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import cards from "../../../utils/constants";

function MoviesCardList(props) {
  const { loggedIn, isOpen, savedMovie, movies } = props;

  console.log(movies);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  /*   React.useEffect(() => {
    if (windowWidth >= 320) {
      setShowMovies(cards.slice(0, 1));
    } else if (windowWidth >= 768) {
      setShowMovies(cards.slice(0, 3));
    } else if (windowWidth >= 1280) {
      setShowMovies(cards.slice(0, 5));
    }
  }); */

  if (windowWidth >= 1280) {
    return (
      <section className='cards'>
        <ul className='cards__list'>
          {movies
            .map((movie) => <MoviesCard key={movie.movieId} movie={movie} />)
            .slice(0, 12)}
        </ul>
        <button type='button' className='cards__else'>
          Ещё
        </button>
      </section>
    );
  }

  if (windowWidth < 768) {
    return (
      <section className='cards'>
        <ul className='cards__list'>
          {movies
            .map((movie) => <MoviesCard key={movie.movieId} movie={movie} />)
            .slice(0, 5)}
        </ul>
        <button type='button' className='cards__else' on>
          Ещё
        </button>
      </section>
    );
  }

  if (768 <= windowWidth) {
    return (
      <section className='cards'>
        <ul className='cards__list'>
          {movies
            .map((movie) => <MoviesCard key={movie.movieId} movie={movie} />)
            .slice(0, 8)}
        </ul>
        <button type='button' className='cards__else' on>
          Ещё
        </button>
      </section>
    );
  }
}

export default MoviesCardList;
