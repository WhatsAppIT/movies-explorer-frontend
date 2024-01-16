import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import profileMenu from '../../images/profileMenu.svg';
//import PopupHeaderButton from '../../components/PopupHeaderButton/PopupHeaderButton';
import './Navigation.css';
import logo320 from '../../images/icon320logo.svg';

function Navigation(props) {
  const { headerPopupOpen } = props;
  console.log(props);
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
            <h3 className='navigation__button_1280'>Аккаунт</h3>
          </button>
        </Link>
        <button
          type='button'
          onClick={headerPopupOpen}
          /*           className='navigation__button_popup' */
        >
          <img src={logo320} className='' />
        </button>
      </div>
    </section>
  );
}

export default Navigation;
