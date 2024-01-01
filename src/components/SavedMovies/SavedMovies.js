import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <section className='savedMovies'>
      <MoviesCardList />
      <MoviesCard />
    </section>
  );
}

export default SavedMovies;
