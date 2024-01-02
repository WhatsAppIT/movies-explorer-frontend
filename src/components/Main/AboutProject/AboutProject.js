import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='aboutproject'>
      <h2 className='aboutproject__title'>О проекте</h2>
      <div className='aboutproject__paragraf'>
        <div className='aboutproject__paragraf_left'>
          <h3 className='aboutproject__stage'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='aboutproject__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutproject__paragraf_right'>
          <h3 className='aboutproject__weeks'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='aboutproject__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
      </div>
      <div className='aboutproject__time'>
        <div className='aboutproject__time_one'>1 неделя</div>
        <div className='aboutproject__time_four'>4 недели</div>
      </div>
      <div className='aboutproject__tech'>
        <div className='aboutproject__tech_back'>Back-end</div>
        <div className='aboutproject__tech_front'>Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
