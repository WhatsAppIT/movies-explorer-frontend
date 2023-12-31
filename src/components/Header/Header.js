import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoHeader1280.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
  const { loggedIn } = props;
  return (
    <section className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='логотип' />
      </Link>
      <div className='header__auth'>
        {!loggedIn ? (
          <>
            <Link to='signup' className='header__auth_registration'>
              Регистрация
            </Link>
            <Link to='signin' className='header__auth_login'>
              Войти
            </Link>
          </>
        ) : (
          <Navigation />
        )}
      </div>
    </section>
  );
}

export default Header;
