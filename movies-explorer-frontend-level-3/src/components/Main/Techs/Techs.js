import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__description'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='techs__table'>
        <li className='techs__table_icon techs__table_icon_html'>HTML</li>
        <li className='techs__table_icon techs__table_icon_css'>CSS</li>
        <li className='techs__table_icon techs__table_icon_js'>JS</li>
        <li className='techs__table_icon techs__table_icon_react'>React</li>
        <li className='techs__table_icon techs__table_icon_git'>Git</li>
        <li className='techs__table_icon techs__table_icon_express'>
          Express.js
        </li>
        <li className='techs__table_icon techs__table_icon_mongo'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
