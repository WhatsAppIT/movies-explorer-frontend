import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Profile.css";
import Header from "../../Header/Header";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function Profile(props) {
  const { loggedIn, onUpdateUser, logOut, error, setError, isOpen } = props;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [edit, setEdit] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();

  function handleEditClick() {
    setEdit(true);
  }

  React.useEffect(() => {
    if (location.pathname === "/profile") {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      email,
    });
    setEdit(false);
  }

  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <main className='profile'>
        <h1 className='profile__title'>{`Привет ${currentUser.name}`}</h1>
        <form className='formProfile'>
          <div className='form__profile form__profile_name'>
            <h3 className='form__profile_title form__profile_name_title'>
              Имя
            </h3>
            <input
              className='form__profile_input form__profile_name_input'
              type='text'
              id='ProfileName'
              minLength='2'
              maxLength='30'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!edit}
            />
          </div>
          <span id='error-profile-name' className='form__error'></span>
          <div className='form__profile form__profile_email'>
            <h3 className='form__profile_title form__profile_email_title'>
              E-mail
            </h3>
            <input
              className='form__profile_input form__profile_email_input'
              type='text'
              id='ProfileEmail'
              minLength='2'
              maxLength='30'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!edit}
            />
          </div>
          <span id='error-profile-email' className='form__error'></span>
        </form>

        {error > 0 ? (
          <p className='profile__save_error profile__save_error_active'>
            {error}
          </p>
        ) : (
          <p className='profile__save_error'></p>
        )}

        <div className={`profile__conteiner ${!edit && "profile__submit"}`}>
          <button
            type='button'
            className='profile__button_edit'
            onClick={handleEditClick}
          >
            Редактировать
          </button>
          <Link to='/' className='profile__logout_link' onClick={logOut}>
            Выйти из аккаунта
          </Link>
        </div>
        <div
          className={`profile__conteiner ${
            edit && "profile__save profile__save_active"
          }`}
        >
          <button
            type='submit'
            onClick={handleSubmit}
            className={`login__submit`}
          >
            Сохранить
          </button>
        </div>
      </main>
    </>
  );
}

export default Profile;

{
  /*           {error > 0 ? (
            "profile__save_error"
          ) : (
            <p className='profile__save_error profile__save_error_active'>
              {error}
            </p>
          )} */
}
