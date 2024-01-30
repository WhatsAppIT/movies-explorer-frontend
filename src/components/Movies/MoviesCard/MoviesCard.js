import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { movie, savedMovie, handleSaveMovie, handleDeleteMovie } = props;

  const location = useLocation();

  let isSaved = false;
  let savedId;
  isSaved = savedMovie.some((data) => {
    if (data.movieId === movie.movieId) {
      savedId = data._id;
      return true;
    }
    return false;
  });

  function durationMovie(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours < 1) {
      return `${minutes}м`;
    } else if (minutes === 0) {
      return `${hours}ч`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  }

  if (location.pathname === "/movies") {
    return (
      <li className='card'>
        <div className='card__image'>
          <img
            className='card__image_foto'
            src={movie.image}
            alt={movie.nameRU}
          />
          <button
            type='button'
            className={`card__image_save ${
              isSaved ? "card__image_save_true" : "card__image_save_false"
            }`}
            onClick={() => {
              isSaved
                ? handleDeleteMovie(movie._id ? movie._id : savedId)
                : handleSaveMovie(movie);
              console.log(movie);
            }}
          ></button>
        </div>
        <div className='card__info'>
          <h2 className='card__info_title'>{movie.nameRU}</h2>
          <div className='card__info_time'>{durationMovie(movie.duration)}</div>
        </div>
      </li>
    );
  }
}

export default MoviesCard;
