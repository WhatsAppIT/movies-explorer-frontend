import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import akkHeader from '../../images/akkHeader1280.svg';
import akkHeaderLogo1280 from '../../images/akkHeaderLogo1280.svg';
import './Navigation.css';

function Navigation() {
  return (
    <section className='navigation'>
      <nav className='navigation__list'>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            `navigation__list_link ${
              isActive ? 'navigation__list_link_active' : ''
            }`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className={({ isActive }) =>
            `navigation__list_link ${
              isActive ? 'navigation__list_link_active' : ''
            }`
          }
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
      <div className='navigation__profile'>
        <Link to='/profile' className='navigation__profile_link'>
          Аккаунт
        </Link>
        <div className='navigation__profile_logo'>
          <img
            src={akkHeader}
            className='navigation__profile_logo_img'
            alt='переход в аккаунт'
          />
          <img
            src={akkHeaderLogo1280}
            className='navigation__profile_logo_akk'
            alt='переход в аккаунт'
          />
        </div>
      </div>
    </section>
  );
}

export default Navigation;
