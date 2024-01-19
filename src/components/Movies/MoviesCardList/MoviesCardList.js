import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import cards from '../../../utils/constants';

function MoviesCardList() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [showMovies, setShowMovies] = React.useState([]);

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
        <div className='cards__list'>
          {cards
            .map((card) => <MoviesCard key={card.movieId} card={card} />)
            .slice(0, 12)}
        </div>
        <button type='button' className='cards__else'>
          Еще
        </button>
      </section>
    );
  }

  if (windowWidth < 768) {
    return (
      <section className='cards'>
        <div className='cards__list'>
          {cards
            .map((card) => <MoviesCard key={card.movieId} card={card} />)
            .slice(0, 5)}
        </div>
        <button type='button' className='cards__else' on>
          Еще
        </button>
      </section>
    );
  }

  if (768 <= windowWidth) {
    return (
      <section className='cards'>
        <div className='cards__list'>
          {cards
            .map((card) => <MoviesCard key={card.movieId} card={card} />)
            .slice(0, 8)}
        </div>
        <button type='button' className='cards__else' on>
          Еще
        </button>
      </section>
    );
  }
}

export default MoviesCardList;
