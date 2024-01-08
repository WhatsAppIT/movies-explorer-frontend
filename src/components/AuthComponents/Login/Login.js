import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  //const { onRegister } = props;
  return (
    <section className='login'>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='form form_type_login'>
        <div className='login__form login__form_type_email'>
          <h3 className='form__title form__title_email'>E-mail</h3>
          <input
            className='form__input form__input_type_login-email'
            type='email'
            id='loginEmail'
            required
            autoComplete='off'
          />
        </div>
        <span id='error-login-email' className='form__error'>
          Что-то пошло не так...
        </span>
        <div className='login__form login__form_type_password'>
          <h3 className='form__title form__title_password'>Пароль</h3>
          <input
            className='form__input form__input_type_login-password'
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
      <button type='submit' className='form__submit form__submit_type_auth'>
        Войти
      </button>
      <div className='login__logout'>
        <h3 className='login__logout_title'>Ещё не зарегистрированы?</h3>
        <Link to='/signup' className='form__link form__link_logout'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
