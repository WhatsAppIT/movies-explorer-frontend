import React from "react";
import "./Portfolio.css";
import logoPortfolio from "../../../images/logoPortfolio.svg";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__static'>
          <a
            href='https://github.com/WhatsAppIT/mesto-frontend-backend-full'
            className='portfolio__link portfolio__link_static'
            target='_blank'
          >
            <p className='portfolio__link portfolio__link_static'>
              Статичный сайт
            </p>
            <button
              src={logoPortfolio}
              className='portfolio__logo portfolio__logo_static'
              alt='ссылка'
            />
          </a>
        </li>
        <li className='portfolio__adaptiv'>
          <a
            href='https://github.com/WhatsAppIT/mesto-frontend-backend-full'
            className='portfolio__link portfolio__link_adaptive'
            target='_blank'
          >
            <p className='portfolio__link portfolio__link_adaptive'>
              Адаптивный сайт
            </p>
            <button
              src={logoPortfolio}
              className='portfolio__logo portfolio__logo_adaptive'
              alt='ссылка'
            />
          </a>
        </li>
        <li className='portfolio__spa'>
          <a
            href='https://github.com/WhatsAppIT/mesto-frontend-backend-full'
            className='portfolio__link portfolio__link_spa'
            target='_blank'
          >
            <p className='portfolio__link portfolio__link_spa'>
              Одностраничное приложение
            </p>
            <button
              src={logoPortfolio}
              className='portfolio__logo portfolio__logo_spa'
              alt='ссылка'
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
