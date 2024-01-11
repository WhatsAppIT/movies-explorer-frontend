import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__description'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className='techs__table'>
        <div className='techs__table_icon'>HTML</div>
        <div className='techs__table_icon'>CSS</div>
        <div className='techs__table_icon'>JS</div>
        <div className='techs__table_icon'>React</div>
        <div className='techs__table_icon'>Git</div>
        <div className='techs__table_icon'>Express.js</div>
        <div className='techs__table_icon'>mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;
