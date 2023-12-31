import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      <Link to='/profile' className='navigation__profile'></Link>
    </section>
  );
}

export default Navigation;
