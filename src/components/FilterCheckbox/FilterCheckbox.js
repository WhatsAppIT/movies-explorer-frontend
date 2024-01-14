import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <form className='form__filter'>
      <div className='form__filter_input'>
        <input className='form__checkbox_input' type='checkbox'></input>
      </div>
      <h3 className='form__filter_title'>Короткометражки</h3>
    </form>
  );
}

export default FilterCheckbox;
