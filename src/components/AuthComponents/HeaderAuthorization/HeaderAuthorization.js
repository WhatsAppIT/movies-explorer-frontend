import React from "react";
import { Link } from "react-router-dom";
import "./HeaderAuthorization.css";

function HeaderAuthorization() {
  return (
    <nav className='headerAuthorization'>
      <Link
        to='/signup'
        className='headerAuthorization__link headerAuthorization__link_registration'
      >
        Регистрация
      </Link>
      <Link
        to='/signin'
        className='headerAuthorization__link headerAuthorization__link_login'
      >
        <button type='button' className='headerAuthorization__link_button'>
          Войти
        </button>
      </Link>
    </nav>
  );
}

export default HeaderAuthorization;
