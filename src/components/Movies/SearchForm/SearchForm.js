import React from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className='search'>
      <form className='formSearch'>
        <input
          className='form__search_input'
          type='search'
          placeholder='Фильмы'
          id='search'
          autoComplete='off'
        />
        <button type='submit' className='form__search_submit'></button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
