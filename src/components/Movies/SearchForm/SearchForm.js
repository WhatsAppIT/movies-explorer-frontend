import React from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import search from '../../../images/find-3.svg';

function SearchForm() {
  return (
    <div className='search'>
      <form className='formSearch'>
        <input
          className='form__search_input'
          type='search'
          placeholder='Фильм'
          id='search'
          autoComplete='off'
        />
        <button type='submit' className='form__search_submit'>
          <img src={search} className='form__search_submit_img' />
        </button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
