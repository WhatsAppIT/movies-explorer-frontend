import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
/* import img1 from '../../../images/pic__COLOR_pic.svg';
import img2 from '../../../images/pic__COLOR_pic (1).svg';
import img3 from '../../../images/pic__COLOR_pic (2).svg';
import img4 from '../../../images/pic__COLOR_pic (3).svg';
import img5 from '../../../images/pic__COLOR_pic (4).svg';
import save from '../../../images/save.svg'; */

const cards = [{}, {}];

function MoviesCardList() {
  return (
    <section className='cards'>
      <div className='cards__list'>
        {cards.map((card) => (
          <MoviesCard key={card._id} card={card} />
        ))}
      </div>
      <button type='button' className='cards__else'>
        Еще
      </button>
    </section>
  );
}

/*       <div className='card'>
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
      <div className='card'>
        <div className='card__image'>
          <img className='card__image_foto' src={img2} alt='фото фильма' />
          <button type='button' className='card__image_save'>
            <img src={save} />
          </button>
        </div>
        <div className='card__info'>
          <div className='card__info_title'>Киноальманах «100 лет дизайна»</div>
          <div className='card__info_time'>1ч 17м</div>
        </div>
      </div>
      <div className='card'>
        <div className='card__image'>
          <div className='card__image'>
            <img className='card__image_foto' src={img3} alt='фото фильма' />
            <button type='button' className='card__image_save'>
              <img src={save} />
            </button>
          </div>
        </div>
        <div className='card__info'>
          <div className='card__info_title'>В погоне за Бенкси</div>
          <div className='card__info_time'>1ч 17м</div>
        </div>
      </div>
      <div className='card'>
        <div className='card__image'>
          <img className='card__image_foto' src={img4} alt='фото фильма' />
          <button type='button' className='card__image_save'>
            <img src={save} />
          </button>
        </div>
        <div className='card__info'>
          <div className='card__info_title'>Баския: Взрыв реальности</div>
          <div className='card__info_time'>1ч 17м</div>
        </div>
      </div>
      <div className='card'>
        <div className='card__image'>
          <img className='card__image_foto' src={img5} alt='фото фильма' />
          <button type='button' className='card__image_save'>
            <img src={save} />
          </button>
        </div>
        <div className='card__info'>
          <div className='card__info_title'>Бег это свобода</div>
          <div className='card__info_time'>1ч 17м</div>
        </div>
      </div> */
export default MoviesCardList;
