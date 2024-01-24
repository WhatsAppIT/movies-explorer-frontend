import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
//import { useFormWithValidation } from "../../../utils/useFormWithValidation";
import logo from "../../../images/logo.svg";

function Login(props) {
  const { onLogin, error } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailInputClick, setEmailInputClick] = React.useState(false);
  const [passwordInputClick, setPasswordInputClick] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const [emailError, setEmailError] = React.useState(
    "Поле не может быть пустым"
  );
  const [passwordError, setPasswordError] = React.useState(
    "Поле не может быть пустым"
  );

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  function handleSubmitLogin(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case "email":
        setEmailInputClick(true);
        break;
      case "password":
        setPasswordInputClick(true);
        break;
    }
  }

  function handlerEmail(e) {
    setEmail(e.target.value);

    const emailValidation =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailValidation.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  }

  function handlerPassword(e) {
    setPassword(e.target.value);

    if (e.target.value.length < 3 || e.target.value.length > 30) {
      setPasswordError("Некорректный пароль");
      if (!e.target.value) {
        setPasswordError("Поле не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
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
            name='email'
            type='email'
            id='loginEmail'
            required
            autoComplete='off'
            onChange={handlerEmail}
            value={email}
            placeholder='Электронная почта'
            onClick={(e) => blurHandler(e)}
          />
        </div>
        <span
          id='error-login-email'
          className={`form__error  ${
            emailInputClick && emailError ? "form__error_visible" : ""
          }`}
        >
          {emailError}
        </span>

        <div className='form__login form__login_password'>
          <label className='form__login_title form__login_password_title'>
            Пароль
          </label>
          <input
            className={`form__login_input ${
              !formValid && passwordError ? "form__login_password_input" : ""
            }`}
            name='password'
            type='password'
            id='loginPassword'
            required
            autoComplete='new-password'
            onChange={handlerPassword}
            value={password}
            placeholder='Пароль'
            minLength='2'
            maxLength='30'
            onClick={(e) => blurHandler(e)}
          />
        </div>
        <span
          id='error-login-password'
          className={`form__error  ${
            passwordInputClick && passwordError ? "form__error_visible" : ""
          }`}
        >
          {passwordError}
        </span>
      </form>

      {error > 0 ? (
        "profile__save_error"
      ) : (
        <p className='profile__save_error profile__save_error_active'>
          {error}
        </p>
      )}

      <button
        type='submit'
        onClick={handleSubmitLogin}
        className={`login__submit ${!formValid ? "login__submit_false" : ""}`}
        disabled={!formValid}
      >
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
