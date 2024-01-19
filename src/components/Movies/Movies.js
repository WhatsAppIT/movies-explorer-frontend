import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
//import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
//import MoviesCard from './MoviesCard/MoviesCard';
import './Movies.css';

function Movies(props) {
  const { loggedIn, isOpen } = props;

  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <section className='movies'>
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
