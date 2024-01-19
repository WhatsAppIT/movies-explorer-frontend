import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PopupHeaderButton.css';
import closeButton from '../../images/closeButton.svg';

function PopupHeaderButton(props) {
  const { isOpen, loggedIn, onClose } = props;
console.log(isOpen)
  return (
    <div className={`headerPopup ${isOpen ? 'headerPopup_opened' : ''}`}>
      <div
        className={`headerPopup__container ${
          isOpen ? 'headerPopup__container_opened' : ''
        }`}
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
            onClick={onClose}
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              `headerPopup__link ${isActive ? 'headerPopup__link_active' : ''}`
            }
            onClick={onClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              `headerPopup__link ${isActive ? 'headerPopup__link_active' : ''}`
            }
            onClick={onClose}
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <Link to='/profile' className='headerPopup__profile_link' onClick={onClose}>
          <button type='button' className='headerPopup__button_320'>
            <h3 className='headerPopup__button_1280'>Аккаунт</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PopupHeaderButton;
