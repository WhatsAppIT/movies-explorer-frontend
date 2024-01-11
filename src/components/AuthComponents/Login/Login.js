import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../../images/logo.svg';

function Login() {
  //const { onRegister } = props;
  return (
    <section className='login'>
      <Link to='/' className='header__login'>
        <img src={logo} className='header__login_img' alt='логотип' />
      </Link>

      <h2 className='login__title'>Рады видеть!</h2>

      <form className='formLogin'>
        <div className='form__login form__login_email'>
          <h3 className='form__login_title form__login_email_title'>E-mail</h3>
          <input
            className='form__login_input form__login_email_input'
            type='email'
            id='loginEmail'
            required
            autoComplete='off'
          />
        </div>
        <span id='error-login-email' className='form__error'>
          Что-то пошло не так...
        </span>

        <div className='form__login form__login_password'>
          <h3 className='form__login_title form__login_password_title'>
            Пароль
          </h3>
          <input
            className='form__login_input form__login_password_input'
            type='password'
            id='loginPassword'
            required
            autoComplete='off'
          />
        </div>
        <span id='error-login-password' className='form__error'>
          Что-то пошло не так...
        </span>
      </form>

      <button type='submit' className='login__submit'>
        Войти
      </button>
      <div className='login__logout'>
        <h3 className='login__logout_title'>Ещё не зарегистрированы?</h3>
        <Link to='/signup' className='login__logout_link'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
