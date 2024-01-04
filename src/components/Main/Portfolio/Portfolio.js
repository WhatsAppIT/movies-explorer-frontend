import React from 'react';
import './Portfolio.css';
import logoPortfolio from '../../../images/logoPortfolio.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__static'>
        <a href='#' className='portfolio__link portfolio__link_static'>
          Статичный сайт
        </a>
        <img
          src={logoPortfolio}
          className='portfolio__logo portfolio__logo_static'
          alt='ссылка'
        />
      </div>
      <div className='portfolio__adaptiv'>
        <a href='#' className='portfolio__link portfolio__link_adaptive'>
          Адаптивный сайт
        </a>
        <img
          src={logoPortfolio}
          className='portfolio__logo portfolio__logo_adaptive'
          alt='ссылка'
        />
      </div>
      <div className='portfolio__spa'>
        <a href='#' className='portfolio__link portfolio__link_spa'>
          Одностраничное приложение
        </a>
        <img
          src={logoPortfolio}
          className='portfolio__logo portfolio__logo_spa'
          alt='ссылка'
        />
      </div>
    </section>
  );
}

export default Portfolio;
