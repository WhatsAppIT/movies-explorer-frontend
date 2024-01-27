import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useFormWithValidation } from "../../../utils/validation";
import "./Profile.css";
import Header from "../../Header/Header";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function Profile(props) {
  const {
    loggedIn,
    onUpdateUser,
    logOut,
    error,
    setError,
    isOpen,
    setUpdateSuccessMessage,
    updateSuccessMessage,
    isLoading,
  } = props;

  const formWithValidation = useFormWithValidation();
  const { name, email } = formWithValidation.values;
  const { values, setValues, handleChange, errors, isValid } =
    formWithValidation;
  const [edit, setEdit] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation();

  let isChanged =
    currentUser.name !== values.name || currentUser.email !== values.email;

  function handleEditClick() {
    setUpdateSuccessMessage(false);
    setEdit(true);
  }

  React.useEffect(() => {
    if (location.pathname === "/profile") {
      setValues(currentUser);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      email,
    });

    setEdit(false);
    console.log("handleSubmit");
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
              name='name'
              id='ProfileName'
              minLength='2'
              maxLength='30'
              required
              value={values.name || ""}
              onChange={handleChange}
              disabled={!edit || isLoading}
            />
          </div>
          <span id='error-profile-name' className='form__error'></span>
          <div className='form__profile form__profile_email'>
            <h3 className='form__profile_title form__profile_email_title'>
              E-mail
            </h3>
            <input
              className='form__profile_input form__profile_email_input'
              type='email'
              name='email'
              id='ProfileEmail'
              minLength='2'
              maxLength='30'
              required
              value={values.email || ""}
              onChange={handleChange}
              disabled={!edit || isLoading}
            />
          </div>
          <span id='error-profile-email' className='form__error'></span>
        </form>

        {updateSuccessMessage ? (
          <p className='profile__save_error profile__save_error_active'>
            Данные успешно изменены
          </p>
        ) : (
          <p className='profile__save_error'>{error}</p>
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
            className={`login__submit ${
              (formValid || !isChanged) && "login__submit_false"
            }`}
            disabled={!isChanged}
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
