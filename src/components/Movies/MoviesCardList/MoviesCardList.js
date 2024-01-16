import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import cards from '../../../utils/constants';

function MoviesCardList() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [showMovies, setShowMovies] = React.useState([]);

  React.useEffect(() => {
    if (windowWidth < 768) {
      setShowMovies(cards.slice(0, 2));
    } else if (768 < windowWidth < 1280) {
      setShowMovies(cards.slice(0, 3));
    } else if (windowWidth > 1280) {
      setShowMovies(cards.slice(0, 6));
    }
  }, [windowWidth]);

  return (
    <section className='cards'>
      <div className='cards__list'>
        {cards.map((card) => (
          <MoviesCard key={card.movieId} card={card} />
        ))}
      </div>
      <button type='button' className='cards__else' on>
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
