import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import HeaderAuthorization from '../AuthComponents/HeaderAuthorization/HeaderAuthorization';
import './Header.css';

function Header(props) {
  const { isOpen, loggedIn, onClose } = props;

  return (
    <section className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} className='header__logo_img' alt='логотип' />
      </Link>
      <div>
        {!loggedIn ? (
          <Navigation isOpen={isOpen} onClose={onClose} />
        ) : (
          <HeaderAuthorization />
        )}
      </div>
    </section>
  );
}

export default Header;
