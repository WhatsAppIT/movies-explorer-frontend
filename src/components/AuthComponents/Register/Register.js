import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  //const { onRegister } = props;
  return (
    <section className='registration'>
      <h2 className='registration__title'>Добро пожаловать!</h2>
      <form className='form form_type_registration'>
        <div className='registration__form registration__form_type_name'>
          <h3 className='form__title form__title_name'>Имя</h3>
          <input
            className='form__input form__input_type_registration-name'
            type='text'
            id='RegistrationName'
            required
            autoComplete='off'
          />
        </div>
        <span id='error-registration-name' className='form__error'>
          Что-то пошло не так...
        </span>
        <div className='registration__form registration__form_type_email'>
          <h3 className='form__title form__title_email'>E-mail</h3>
          <input
            className='form__input form__input_type_registration-email'
            type='email'
            id='RegistrationEmail'
            required
            autoComplete='off'
          />
        </div>
        <span id='error-registration-email' className='form__error'>
          Что-то пошло не так...
        </span>
        <div className='registration__form registration__form_type_password'>
          <h3 className='form__title form__title_password'>Пароль</h3>
          <input
            className='form__input form__input_type_registration-password'
            type='password'
            id='RegistrationPassword'
            required
            autoComplete='off'
          />
        </div>
        <span id='error-registration-password' className='form__error'>
          Что-то пошло не так...
        </span>
      </form>
      <button type='submit' className='form__submit form__submit_type_auth'>
        Зарегистрироваться
      </button>
      <div className='registration__logout'>
        <h3 className='registration__logout_title'>Уже зарегистрированы?</h3>
        <Link to='/signin' className='form__link form__link_logout'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
