import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Виталий!</h2>
      <form className='form form_type_profile'>
        <div className='profile__form profile__form_type_name'>
          <h3 className='form__text form__text_type_name'>Имя</h3>
          <input
            className='form__input form__input_type_profile-name'
            type='text'
            id='ProfileName'
            minLength='2'
            maxLength='30'
            required
          />
          <span id='error-profile' className='form__error'></span>
        </div>
        <div className='profile__form profile__form_type_email'>
          <h3 className='form__text form__text_type_email'>E-mail</h3>
          <input
            className='form__input form__input_type_profile-email'
            type='text'
            id='ProfileName'
            minLength='2'
            maxLength='30'
            required
          />
          <span id='error-profile' className='form__error'></span>
        </div>
      </form>
      <div className='profile__button'>
        <button className='form__submit profile__button_edit'>
          Редактировать
        </button>
        <Link to='/' className='link profile__button_logout'>
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
