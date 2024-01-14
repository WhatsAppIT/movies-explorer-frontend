import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import cards from '../../../utils/constants';

function MoviesCardList() {
  return (
    <section className='cards'>
      <div className='cards__list'>
        {cards.map((card) => (
          <MoviesCard key={card.movieId} card={card} />
        ))}
      </div>
      <button type='button' className='cards__else'>
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
