import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import akkHeader from '../../images/akkHeader1280.svg';
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
        <img
          src={akkHeader}
          className='navigation__profile_img'
          alt='переход в аккаунт'
        />
      </div>
    </section>
  );
}

export default Navigation;
