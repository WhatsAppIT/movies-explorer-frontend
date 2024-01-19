import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
//import Preloader from './Preloader/Preloader';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
//import MoviesCard from './MoviesCard/MoviesCard';
import './SavedMovies.css';

function SavedMovies(props) {
  const { loggedIn, isOpen, savedMovie, handleLikeMovie } = props;

  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList
          savedMovie={savedMovie}
          handleLikeMovie={handleLikeMovie}
        />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
