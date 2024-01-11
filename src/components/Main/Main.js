import React from 'react';
import Promo from '../Main/Promo/Promo.js';
//import NavTab from '../Main/NavTab/NavTab.js';
import AboutProject from '../Main/AboutProject/AboutProject.js';
import Techs from '../Main/Techs/Techs.js';
import AboutMe from '../Main/AboutMe/AboutMe.js';
import Portfolio from '../Main/Portfolio/Portfolio.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import './Main.css';

function Main() {
  return (
    <>
      <Header />
      <section className='main'>
        <Promo />
        {/* <NavTab /> */}
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </section>
      <Footer />
    </>
  );
}

export default Main;
