import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../../images/logo.svg";

function Login(props) {
  const { onLogin } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmitLogin(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <main className='login'>
      <Link to='/' className='header__login'>
        <img src={logo} className='header__login_img' alt='логотип' />
      </Link>

      <h1 className='login__title'>Рады видеть!</h1>

      <form className='formLogin'>
        <div className='form__login form__login_email'>
          <label className='form__login_title form__login_email_title'>
            E-mail
          </label>
          <input
            className='form__login_input form__login_email_input'
            type='email'
            id='loginEmail'
            required
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Электронная почта'
          />
        </div>
        <span id='error-login-email' className='form__error'>
          Что-то пошло не так...
        </span>

        <div className='form__login form__login_password'>
          <label className='form__login_title form__login_password_title'>
            Пароль
          </label>
          <input
            className='form__login_input form__login_password_input'
            type='password'
            id='loginPassword'
            required
            autoComplete='new-password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Пароль'
            minLength='2'
            maxLength='30'
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
    </main>
  );
}

export default Login;
