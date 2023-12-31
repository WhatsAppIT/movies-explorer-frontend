import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoHeader1280.svg';
import Navigation from '../Navigation/Navigation';
import HeaderAuthorization from '../AuthComponents/HeaderAuthorization/HeaderAuthorization';
import './Header.css';

function Header(props) {
  const { loggedIn } = props;

  return (
    <section className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt='логотип' />
      </Link>
      {!loggedIn ? <HeaderAuthorization /> : <Navigation />}
    </section>
  );
}

export default Header;
