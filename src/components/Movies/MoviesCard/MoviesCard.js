import React from 'react';
import img1 from '../../../images/pic__COLOR_pic.svg';
import save from '../../../images/save.svg';
import './MoviesCard.css';

function MoviesCard() {
  return (
    <div className='card'>
      <div className='card__image'>
        <img className='card__image_foto' src={img1} alt='фото фильма' />
        <button type='button' className='card__image_save'>
          <img src={save} />
        </button>
      </div>
      <div className='card__info'>
        <div className='card__info_title'>33 слова о дизайне</div>
        <div className='card__info_time'>1ч 17м</div>
      </div>
    </div>
  );
}

export default MoviesCard;
