import React from 'react';
//import on from '../../images/vkl.svg';

function FilterCheckbox() {
  return (
    <form className='form__filter'>
      <input className='form__input' type='checkbox' />
      <h3 className='form__filter_title'>Короткометражки</h3>
    </form>
  );
}

export default FilterCheckbox;
