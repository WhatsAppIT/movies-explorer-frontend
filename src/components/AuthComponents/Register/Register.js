import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../../images/logo.svg";

function Register(props) {
  const { onRegister, error } = props;

  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailInputClick, setEmailInputClick] = React.useState(false);
  const [passwordInputClick, setPasswordInputClick] = React.useState(false);
  const [userNameInputClick, setUserNameInputClick] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const [emailError, setEmailError] = React.useState(
    "Поле не может быть пустым"
  );
  const [passwordError, setPasswordError] = React.useState(
    "Поле не может быть пустым"
  );
  const [userNameError, setUserNameError] = React.useState(
    "Поле не может быть пустым"
  );

  React.useEffect(() => {
    if (emailError || passwordError || userNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, userNameError]);

  function handleSubmitRegister(e) {
    e.preventDefault();

    onRegister(userName, email, password);
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case "email":
        setEmailInputClick(true);
        break;
      case "password":
        setPasswordInputClick(true);
        break;
      case "userName":
        setUserNameInputClick(true);
        break;
    }
  }

  function handlerEmailValidation(e) {
    setEmail(e.target.value);

    const emailValidation =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailValidation.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  }

  function handlerPasswordValidation(e) {
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

  function handlerUserNameValidation(e) {
    setUserName(e.target.value);

    const userNameValidation = /^[a-zA-Z-яА-яё -]+[А-Яа-я\- ]*$/;

    if (e.target.value.length < 3 || e.target.value.length > 30) {
      setUserNameError("Некорректо заполнено поле");
      if (!e.target.value) {
        setUserNameError("Поле не может быть пустым");
      }
    } else {
      setUserNameError("");
    }
    if (!userNameValidation.test(String(e.target.value).toLowerCase())) {
      setUserNameError("Некорректо заполнено поле");
    } else {
      setUserNameError("");
    }
  }

  return (
    <main className='register'>
      <Link to='/' className='header__register'>
        <img src={logo} className='header__register_img' alt='логотип' />
      </Link>

      <h1 className='register__title'>Добро пожаловать!</h1>

      <form className='formregister'>
        <div className='form__register form__register_name'>
          <label className='form__register_title form__register_name_title'>
            Имя
          </label>
          <input
            className='form__register_input form__register_name_input'
            id='registerUserName'
            type='text'
            name='userName'
            required
            autoComplete='off'
            onChange={handlerUserNameValidation}
            value={userName}
            placeholder='Имя'
            onClick={(e) => blurHandler(e)}
            minLength='2'
            maxLength='30'
          />
        </div>
        <span
          id='error-register-userName'
          className={`form__error  ${
            userNameInputClick && userNameError ? "form__error_visible" : ""
          }`}
        >
          {userNameError}
        </span>

        <div className='form__register form__register_email'>
          <label className='form__register_title form__register_email_title'>
            E-mail
          </label>
          <input
            className='form__register_input form__register_email_input'
            id='registerEmail'
            name='email'
            type='email'
            required
            autoComplete='off'
            onChange={handlerEmailValidation}
            value={email}
            placeholder='Электронная почта'
            onClick={(e) => blurHandler(e)}
          />
        </div>
        <span
          id='error-register-email'
          className={`form__error  ${
            emailInputClick && emailError ? "form__error_visible" : ""
          }`}
        >
          {emailError}
        </span>

        <div className='form__register form__register_password'>
          <label className='form__register_title form__register_password_title'>
            Пароль
          </label>
          <input
            className={`form__register_input ${
              !formValid && passwordError ? "form__register_password_input" : ""
            }`}
            type='password'
            id='registerPassword'
            name='password'
            required
            autoComplete='new-password'
            onChange={handlerPasswordValidation}
            value={password}
            placeholder='Пароль'
            minLength='2'
            maxLength='30'
            onClick={(e) => blurHandler(e)}
          />
        </div>
        <span
          id='error-register-password'
          className={`form__error  ${
            passwordInputClick && passwordError ? "form__error_visible" : ""
          }`}
        >
          {passwordError}
        </span>
      </form>

      {/*       {error ? (
        <p className='profile__save_error profile__save_error_active'>
          {error}
        </p>
      ) : (
        <p className='profile__save_error profile__save_error_active'>
          {error}
        </p>
      )}
 */}
      <button
        type='submit'
        onClick={handleSubmitRegister}
        className={`register__submit ${
          !formValid ? "register__submit_false" : ""
        }`}
        disabled={!formValid}
      >
        Зарегистрироваться
      </button>
      <div className='register__logout'>
        <h3 className='register__logout_title'>Уже зарегистрированы?</h3>
        <Link to='/signin' className='register__logout_link'>
          Войти
        </Link>
      </div>
    </main>
  );
}

export default Register;
