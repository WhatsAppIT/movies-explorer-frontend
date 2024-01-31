import React from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import search from "../../../images/find-3.svg";

function SearchForm(props) {
  const {
    searchForm,
    setSearchForm,
    handleSubmitSearchForm,
    checkBox,
    setCheckBox,
    filterMoviesInSearch,
  } = props;

  return (
    <div className='search'>
      <form className='formSearch' onSubmit={handleSubmitSearchForm}>
        <div className='form__search'>
          <input
            className='form__search_input'
            type='text'
            name='search'
            placeholder='Фильм'
            id='search'
            autoComplete='off'
            required
            value={searchForm}
            onChange={(e) => setSearchForm(e.target.value)}
          />
          <button type='submit' className='form__search_submit'>
            <img src={search} className='form__search_submit_img' />
          </button>
        </div>
      </form>
      <FilterCheckbox
        checkBox={checkBox}
        setCheckBox={setCheckBox}
        filterMoviesInSearch={filterMoviesInSearch}
      />
    </div>
  );
}

export default SearchForm;
