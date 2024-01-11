import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import profileMenu from '../../images/profileMenu.svg';
import './Navigation.css';
import logo320 from '../../images/icon320logo.svg';

function Navigation() {
  return (
    <section className='navigation'>
      <nav className='navigation__links'>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            `navigation__link ${isActive ? 'navigation__link_active' : ''}`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className={({ isActive }) =>
            `navigation__link ${isActive ? 'navigation__link_active' : ''}`
          }
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
      <div className='navigation__profile'>
        <Link to='/profile' className='navigation__profile_link'>
          <button type='button' className='navigation__button_320'>
            <img src={logo320} className='' />
          </button>
          <h3 className='navigation__button_1280'>Аккаунт</h3>
        </Link>
      </div>
    </section>
  );
}

export default Navigation;
