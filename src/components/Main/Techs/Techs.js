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
        <div className='techs__table_icon techs__table_icon_html'>HTML</div>
        <div className='techs__table_icon techs__table_icon_css'>CSS</div>
        <div className='techs__table_icon techs__table_icon_js'>JS</div>
        <div className='techs__table_icon techs__table_icon_react'>React</div>
        <div className='techs__table_icon techs__table_icon_git'>Git</div>
        <div className='techs__table_icon techs__table_icon_express'>
          Express.js
        </div>
        <div className='techs__table_icon techs__table_icon_mongo'>mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;
