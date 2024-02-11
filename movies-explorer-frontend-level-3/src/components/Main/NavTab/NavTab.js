import React from "react";
//import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className='promo__nav'>
      <Link
        to='/#about-project'
        className='nav__title promo__nav_about-project'
      >
        О проекте
      </Link>
      <Link to='/#techs' className='nav__title promo__nav_techs'>
        Технологии
      </Link>
      <Link to='/#about-me' className='nav__title promo__nav_about-me'>
        Студент
      </Link>
    </nav>
  );
}

export default NavTab;
