import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__info'>
        <ul className='footer__info_author'>
          <li className='footer__info_author_name'>
            <a
              className='footer__link'
              target='_blank'
              href='https://practicum.yandex.ru/'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__info_author_github'>
            <a
              className='footer__link'
              target='_blank'
              href='https://github.com/WhatsAppIT'
            >
              Github
            </a>
          </li>
        </ul>
        <h3 className='footer__info_year'>&copy; 2023</h3>
      </div>
    </footer>
  );
}

export default Footer;
