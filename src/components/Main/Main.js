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

function Main(props) {
  const { isOpen, loggedIn, onClose } = props;
  console.log(isOpen);
  return (
    <>
      <Header loggedIn={loggedIn} isOpen={isOpen} onClose={onClose} />
      <main className='main'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
