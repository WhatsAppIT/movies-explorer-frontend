import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../../images/logo.svg';

function Register(props) {
  const { onRegister } = props;

  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmitLogin(e) {
    e.preventDefault();
    onRegister(userName, email, password);
  }

  return (
    <section className='register'>
      <Link to='/' className='header__register'>
        <img src={logo} className='header__register_img' alt='логотип' />
      </Link>

      <h2 className='register__title'>Добро пожаловать!</h2>

      <form className='formregister'>
        <div className='form__register form__register_name'>
          <h3 className='form__register_title form__register_name_title'>
            Имя
          </h3>
          <input
            className='form__register_input form__register_name_input'
            type='text'
            id='registerName'
            required
            autoComplete='off'
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <span id='error-register-name' className='form__error'>
          Что-то пошло не так...
        </span>

        <div className='form__register form__register_email'>
          <h3 className='form__register_title form__register_email_title'>
            E-mail
          </h3>
          <input
            className='form__register_input form__register_email_input'
            type='email'
            id='registerEmail'
            required
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <span id='error-register-email' className='form__error'>
          Что-то пошло не так...
        </span>

        <div className='form__register form__register_password'>
          <h3 className='form__register_title form__register_password_title'>
            Пароль
          </h3>
          <input
            className='form__register_input form__register_password_input'
            type='password'
            id='registerPassword'
            required
            autoComplete='new-password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <span id='error-register-password' className='form__error'>
          Что-то пошло не так...
        </span>
      </form>

      <button type='submit' className='register__submit'>
        Зарегистрироваться
      </button>
      <div className='register__logout'>
        <h3 className='register__logout_title'>Уже зарегистрированы?</h3>
        <Link to='/signin' className='register__logout_link'>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
