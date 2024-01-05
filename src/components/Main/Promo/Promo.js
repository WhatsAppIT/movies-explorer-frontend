import React from 'react';
import promoImg from '../../../images/promo1280.svg';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img src={promoImg} className='promo__img' alt='иображение' />
    </section>
  );
}

export default Promo;
