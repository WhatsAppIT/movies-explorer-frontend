import React from 'react';
import './AboutMe.css';
import userFoto from '../../../images/aboutfoto.svg';

function AboutMe() {
  return (
    <section className='about'>
      <h2 className='about__title'>Студент</h2>
      <div className='about__info'>
        <img src={userFoto} className='about__info_image' />
        <div className='about__info_user'>
          <p className='about__info_user_name'>Виталий</p>
          <p className='about__info_user_job'>Фронтенд-разработчик, 30 лет</p>
          <p className='about__info_user_about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <p className='about__info_user_git'>Github</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
