import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderAuthorization.css';

function HeaderAuthorization() {
  <div className='header__auth'>
    <Link to='/signup' className='header__auth_registration'>
      Регистрация
    </Link>
    <Link to='/signin' className='header__auth_login'>
      Войти
    </Link>
  </div>;
}

export default HeaderAuthorization;
