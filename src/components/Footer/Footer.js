import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__info'>
        <h3 className='footer__info_year'>&copy; 2023</h3>
        <div className='footer__info_author'>
          <h3 className='footer__info_author_name'>Яндекс.Практикум</h3>
          <h3 className='footer__info_author_github'>Github</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
