import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './PopupHeaderButton.css';
import logo320 from '../../images/icon320logo.svg';
import closeButton from '../../images/closeButton.svg';

function PopupHeaderButton(props) {
  const { isOpen, onClose } = props;

  return (
    <div className={isOpen ? 'headerPopup headerPopup_opened' : 'headerPopup'}>
      <div
        className={
          isOpen
            ? 'headerPopup__container headerPopup__container_opened'
            : 'headerPopup__container'
        }
      >
        <button
          className='headerPopup__close-button'
          onClick={onClose}
          type='button'
        >
          <img className='headerPopup__close-button_img' src={closeButton} />
        </button>
        <nav className='headerPopup__navigation'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `headerPopup__link ${isActive ? 'headerPopup__link_active' : ''}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              `headerPopup__link ${isActive ? 'headerPopup__link_active' : ''}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              `headerPopup__link ${isActive ? 'headerPopup__link_active' : ''}`
            }
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <Link to='/profile' className='headerPopup__profile_link'>
          <button type='button' className='headerPopup__button_320'>
            <h3 className='headerPopup__button_1280'>Аккаунт</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PopupHeaderButton;
