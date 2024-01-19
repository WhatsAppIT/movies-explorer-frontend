import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../../Header/Header';
import CurrentUserContext from "../../../contexts/CurrentUserContext";
 

function Profile(props) {
  const { loggedIn, isOpen, onUpdateUser } = props;


  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (isOpen) {
      setUserName(currentUser.userName);
      setUserEmail(currentUser.userEmail);
    }
 
  }, [currentUser, isOpen])
 
  function handleChangeEmail(e) {
    setUserEmail(e.target.value);
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      userName: userName,
      userEmail: userEmail,
    });
 
  }
 


  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              />
          </div>
          <span id='error-profile-email' className='form__error'></span>
        </form>
        <div className='profile__submit'>
          <button className='profile__button_edit'>Редактировать</button>
          <Link to='/' className='profile__logout_link'>
            Выйти из аккаунта
          </Link>
        </div>
        <div className='profile__save'>
          <p className='profile__save_error profile__save_error_active'>При обновлении профиля произошла ошибка.</p>
          <button type='submit' className='profile__save_button'>Сохранить</button>
        </div>
      </section>
    </>
  );
}

export default Profile;
