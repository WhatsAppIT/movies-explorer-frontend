import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className='notfound'>
      <h1 className='notfound__title'>404</h1>
      <h3 className='notfound__subtitle'>Страница не найдена</h3>
      <Link to='/' className='link notfound__link'>
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
