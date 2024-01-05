import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className='notfound'>
      <h2 className='notfound__title'>404</h2>
      <h3 className='notfound__subtitle'>Страница не найдена</h3>
      <Link to='/' className='notfound__link'>
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
