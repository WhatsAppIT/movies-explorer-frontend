import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  const {
    card: { nameRU, duration, image },
  } = props;

  const [savedMovie, setSavedMovie] = React.useState(false);

  function handleSaveMovie() {
    setSavedMovie((saved) => !saved);
  }

  function durationMovie(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours < 1) {
      return `${minutes} м`;
    } else if (minutes === 0) {
      return `${hours} ч`;
    } else {
      return `${hours} ч ${minutes} м`;
    }
  }

  return (
    <div className='card'>
      <div className='card__image'>
        <img className='card__image_foto' src={image} alt={nameRU} />
        <button
          type='button'
          className={`card__image_save ${
            savedMovie ? 'card__image_save_true' : 'card__image_save_false'
          }`}
          onClick={handleSaveMovie}
        ></button>
      </div>
      <div className='card__info'>
        <h2 className='card__info_title'>{nameRU}</h2>
        <div className='card__info_time'>{durationMovie(duration)}</div>
      </div>
    </div>
  );
}

export default MoviesCard;
