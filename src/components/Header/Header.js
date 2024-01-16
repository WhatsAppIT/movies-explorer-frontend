import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import HeaderAuthorization from '../AuthComponents/HeaderAuthorization/HeaderAuthorization';
import './Header.css';

function Header(props) {
  const { loggedIn, onClick } = props;

  return (
    <section className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} className='header__logo_img' alt='логотип' />
      </Link>
      {loggedIn ? (
        <HeaderAuthorization />
      ) : (
        <Navigation headerPopupOpen={onClick} />
      )}
    </section>
  );
}

export default Header;
